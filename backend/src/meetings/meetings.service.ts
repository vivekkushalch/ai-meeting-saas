import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meeting, MeetingStatus } from './entities/meeting.entity';
import { StorageService } from '../storage/storage.service';
import { WorkersService } from '../workers/workers.service';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectRepository(Meeting)
    private meetingsRepository: Repository<Meeting>,
    private storageService: StorageService,
    private workersService: WorkersService,
    private configService: ConfigService,
  ) {}

  async create(userId: string, meetingData: any): Promise<Meeting> {
    const meeting = this.meetingsRepository.create({
      ...meetingData,
      userId,
    } as Partial<Meeting>);
    return this.meetingsRepository.save(meeting);
  }

  async findAll(userId: string): Promise<Meeting[]> {
    return this.meetingsRepository.find({ where: { userId }, order: { date: 'DESC' } });
  }

  async findOne(id: string, userId: string): Promise<Meeting> {
    const meeting = await this.meetingsRepository.findOne({ where: { id, userId } });
    if (!meeting) {
      throw new NotFoundException('Meeting not found');
    }
    return meeting;
  }

  async update(id: string, userId: string, updateData: any): Promise<Meeting> {
    await this.findOne(id, userId);
    await this.meetingsRepository.update(id, updateData);
    return this.findOne(id, userId);
  }

  async remove(id: string, userId: string): Promise<void> {
    await this.findOne(id, userId);
    await this.meetingsRepository.delete(id);
  }

  async startMeeting(id: string, userId: string) {
    const meeting = await this.findOne(id, userId);
    const sessionId = uuidv4();
    const bucket = this.configService.get<string>('MINIO_BUCKET_AUDIO') || 'audio';
    const objectName = `${userId}/${meeting.id}/${sessionId}.mp3`;
    
    const uploadUrl = await this.storageService.getPresignedUrl(bucket, objectName);

    return {
      meeting_id: meeting.id,
      session_id: sessionId,
      started_at: new Date(),
      upload_credentials: {
        minio_upload_url: uploadUrl,
        upload_id: sessionId,
        expires_at: new Date(Date.now() + 3600 * 1000),
        max_file_size: 104857600,
        allowed_extensions: ['wav', 'mp3', 'ogg', 'm4a', 'webm'],
      },
      websocket_url: `ws://localhost:3000/ws/meeting/${sessionId}`,
    };
  }

  async endMeeting(id: string, userId: string, endData: any) {
    const meeting = await this.findOne(id, userId);
    const bucket = this.configService.get<string>('MINIO_BUCKET_AUDIO');
    const objectName = `${userId}/${meeting.id}/${endData.session_id}.mp3`;
    const audioUrl = `minio://${bucket}/${objectName}`;

    await this.meetingsRepository.update(id, {
      status: MeetingStatus.PROCESSING,
      audioUrl,
    });

    // Trigger worker job
    await this.workersService.publishCombinedJob({
      job_id: endData.session_id,
      meeting_id: meeting.id,
      audio_url: audioUrl,
      options: endData.processing_options || { diarize: true, language: 'en' },
    });

    return {
      meeting_id: meeting.id,
      session_id: endData.session_id,
      ended_at: new Date(),
      processing_job_id: endData.session_id,
      minio_audio_url: audioUrl,
      estimated_processing_time: 300,
      status: 'processing_queued',
    };
  }
}

import { Injectable } from '@nestjs/common';
import { StorageService } from '../storage/storage.service';
import { WorkersService } from '../workers/workers.service';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  constructor(
    private storageService: StorageService,
    private workersService: WorkersService,
    private configService: ConfigService,
  ) {}

  async uploadAudio(userId: string, file: Express.Multer.File, options: any) {
    const uploadId = uuidv4();
    const bucket = this.configService.get<string>('MINIO_BUCKET_AUDIO') || 'audio';
    const objectName = `${userId}/uploads/${uploadId}-${file.originalname}`;
    
    await this.storageService.uploadFile(bucket, objectName, file.buffer, {
      'Content-Type': file.mimetype,
    });

    const audioUrl = `minio://${bucket}/${objectName}`;

    // Initiate processing
    await this.workersService.publishCombinedJob({
      job_id: uploadId,
      audio_url: audioUrl,
      meeting_id: options.meeting_id,
      options: {
        diarize: options.diarize !== 'false',
        language: options.language || 'en',
        min_speakers: options.min_speakers,
        max_speakers: options.max_speakers,
      },
    });

    return {
      upload_id: uploadId,
      processing_job_id: uploadId,
      filename: file.originalname,
      file_size_kb: file.size / 1024,
      file_type: file.mimetype,
      minio_object_url: audioUrl,
      processing_status: 'queued',
      estimated_processing_time: 300,
      created_at: new Date(),
    };
  }
}

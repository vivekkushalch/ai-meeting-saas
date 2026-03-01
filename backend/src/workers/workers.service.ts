import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as amqp from 'amqp-connection-manager';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WorkersService implements OnModuleInit, OnModuleDestroy {
  private connection: amqp.AmqpConnectionManager;
  private channel: amqp.ChannelWrapper;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    this.connection = amqp.connect([this.configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672']);
    this.channel = this.connection.createChannel({
      json: true,
      setup: (channel) => {
        return Promise.all([
          channel.assertQueue('transcription', { durable: true }),
          channel.assertQueue('ai_analysis', { durable: true }),
          channel.assertQueue('combined', { durable: true }),
        ]);
      },
    });
  }

  async onModuleDestroy() {
    await this.connection.close();
  }

  private createCeleryMessage(taskName: string, args: any[]) {
    const taskId = uuidv4();
    return {
      task: taskName,
      id: taskId,
      args: args,
      kwargs: {},
      retries: 0,
      eta: null,
      expires: null,
      utc: true,
      callbacks: null,
      errbacks: null,
      timelimit: [null, null],
      taskset: null,
      chord: null,
    };
  }

  async publishTranscriptionJob(jobData: any) {
    const message = this.createCeleryMessage('services.transcription.tasks.transcribe_audio', [jobData]);
    return this.channel.sendToQueue('transcription', message);
  }

  async publishAiAnalysisJob(jobData: any) {
    const message = this.createCeleryMessage('services.ai_analysis.tasks.analyze_transcript', [jobData]);
    return this.channel.sendToQueue('ai_analysis', message);
  }

  async publishCombinedJob(jobData: any) {
    const message = this.createCeleryMessage('services.transcription.tasks.transcribe_and_analyze', [jobData]);
    return this.channel.sendToQueue('combined', message);
  }
}

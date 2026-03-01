import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from 'minio';

@Injectable()
export class StorageService implements OnModuleInit {
  private minioClient: Minio.Client;

  constructor(private configService: ConfigService) {
    this.minioClient = new Minio.Client({
      endPoint: this.configService.get<string>('MINIO_ENDPOINT') || 'localhost',
      port: this.configService.get<number>('MINIO_PORT') || 9000,
      useSSL: false,
      accessKey: this.configService.get<string>('MINIO_ACCESS_KEY') || 'minioadmin',
      secretKey: this.configService.get<string>('MINIO_SECRET_KEY') || 'minioadmin',
    });
  }

  async onModuleInit() {
    const buckets = [
      this.configService.get<string>('MINIO_BUCKET_AUDIO') || 'audio',
      this.configService.get<string>('MINIO_BUCKET_TRANSCRIPTS') || 'transcripts',
      this.configService.get<string>('MINIO_BUCKET_ANALYSIS') || 'analysis',
    ];

    for (const bucket of buckets) {
      const exists = await this.minioClient.bucketExists(bucket);
      if (!exists) {
        await this.minioClient.makeBucket(bucket, 'us-east-1');
      }
    }
  }

  async getPresignedUrl(bucketName: string, objectName: string, expiry = 3600): Promise<string> {
    return this.minioClient.presignedPutObject(bucketName, objectName, expiry);
  }

  async getDownloadUrl(bucketName: string, objectName: string, expiry = 3600): Promise<string> {
    return this.minioClient.presignedGetObject(bucketName, objectName, expiry);
  }

  async uploadFile(bucketName: string, objectName: string, buffer: Buffer, metaData: any): Promise<string> {
    await this.minioClient.putObject(bucketName, objectName, buffer, buffer.length, metaData);
    return objectName;
  }
}

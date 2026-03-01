import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { StorageModule } from '../storage/storage.module';
import { WorkersModule } from '../workers/workers.module';

@Module({
  imports: [StorageModule, WorkersModule],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}

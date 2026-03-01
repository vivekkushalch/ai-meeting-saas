import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { Meeting } from '../meetings/entities/meeting.entity';
import { Task } from '../tasks/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meeting, Task])],
  controllers: [SearchController],
})
export class SearchModule {}

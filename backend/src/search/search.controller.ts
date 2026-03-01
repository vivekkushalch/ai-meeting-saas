import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Meeting } from '../meetings/entities/meeting.entity';
import { Task } from '../tasks/entities/task.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('search')
export class SearchController {
  constructor(
    @InjectRepository(Meeting)
    private meetingsRepository: Repository<Meeting>,
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  @Get('meetings')
  async searchMeetings(@Request() req, @Query('q') query: string) {
    return this.meetingsRepository.find({
      where: [
        { userId: req.user.userId, title: ILike(`%${query}%`) },
        { userId: req.user.userId, summary: ILike(`%${query}%`) },
      ],
    });
  }

  @Get('tasks')
  async searchTasks(@Request() req, @Query('q') query: string) {
    return this.tasksRepository.find({
      where: [
        { userId: req.user.userId, title: ILike(`%${query}%`) },
        { userId: req.user.userId, description: ILike(`%${query}%`) },
      ],
    });
  }
}

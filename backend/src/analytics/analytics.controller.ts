import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meeting } from '../meetings/entities/meeting.entity';
import { Task, TaskStatus } from '../tasks/entities/task.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('analytics')
export class AnalyticsController {
  constructor(
    @InjectRepository(Meeting)
    private meetingsRepository: Repository<Meeting>,
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  @Get('dashboard')
  async getDashboard(@Request() req) {
    const userId = req.user.userId;
    const [meetings, totalMeetings] = await this.meetingsRepository.findAndCount({ where: { userId } });
    const [tasks, totalTasks] = await this.tasksRepository.findAndCount({ where: { userId } });
    
    const completedMeetings = meetings.filter(m => m.status === 'completed').length;
    const completedTasks = tasks.filter(t => t.status === TaskStatus.COMPLETED).length;

    return {
      success: true,
      data: {
        overview: {
          total_meetings: totalMeetings,
          completed_meetings: completedMeetings,
          total_tasks: totalTasks,
          completed_tasks: completedTasks,
          productivity_score: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
        },
        // In a real app, you'd add more complex queries for trends
      }
    };
  }
}

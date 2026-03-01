import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Request() req, @Body() taskData: any) {
    return this.tasksService.create(req.user.userId, taskData);
  }

  @Get()
  findAll(@Request() req, @Query('meeting_id') meetingId?: string) {
    return this.tasksService.findAll(req.user.userId, meetingId);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.tasksService.findOne(id, req.user.userId);
  }

  @Put(':id')
  update(@Request() req, @Param('id') id: string, @Body() updateData: any) {
    return this.tasksService.update(id, req.user.userId, updateData);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.tasksService.remove(id, req.user.userId);
  }

  @Patch(':id/toggle')
  toggle(@Request() req, @Param('id') id: string) {
    return this.tasksService.toggle(id, req.user.userId);
  }
}

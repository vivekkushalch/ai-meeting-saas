import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingsService: MeetingsService) {}

  @Post()
  create(@Request() req, @Body() meetingData: any) {
    return this.meetingsService.create(req.user.userId, meetingData);
  }

  @Get()
  findAll(@Request() req) {
    return this.meetingsService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.meetingsService.findOne(id, req.user.userId);
  }

  @Put(':id')
  update(@Request() req, @Param('id') id: string, @Body() updateData: any) {
    return this.meetingsService.update(id, req.user.userId, updateData);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.meetingsService.remove(id, req.user.userId);
  }

  @Post(':id/start')
  startMeeting(@Request() req, @Param('id') id: string) {
    return this.meetingsService.startMeeting(id, req.user.userId);
  }

  @Post(':id/end')
  endMeeting(@Request() req, @Param('id') id: string, @Body() endData: any) {
    return this.meetingsService.endMeeting(id, req.user.userId, endData);
  }
}

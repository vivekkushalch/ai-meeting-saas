import { Injectable } from '@nestjs/common';
import { MeetingsService } from '../meetings/meetings.service';
import { NotificationsGateway } from '../notifications/notifications.gateway';
import { TasksService } from '../tasks/tasks.service';
import { MeetingStatus } from '../meetings/entities/meeting.entity';

@Injectable()
export class WebhooksService {
  constructor(
    private meetingsService: MeetingsService,
    private notificationsGateway: NotificationsGateway,
    private tasksService: TasksService,
  ) {}

  async handleAudioProcessingComplete(data: any) {
    const { meeting_id, status, results } = data;

    if (status === 'completed') {
      await this.meetingsService.update(meeting_id, data.user_id, {
        status: MeetingStatus.COMPLETED,
        transcriptUrl: results.transcript_url,
        analysisUrl: results.analysis_url,
        analysis: results.analysis_data,
        summary: results.analysis_data.meeting_summary,
        transcriptAvailable: true,
        analysisAvailable: true,
      });

      // Create tasks from analysis
      if (results.analysis_data.action_items) {
        for (const item of results.analysis_data.action_items) {
          await this.tasksService.create(data.user_id, {
            meetingId: meeting_id,
            title: item.title,
            description: item.description,
            priority: item.priority,
            assignee: item.assignee,
            dueDate: item.deadline,
          });
        }
      }
    }

    this.notificationsGateway.sendMeetingUpdate(meeting_id, {
      type: 'processing_complete',
      status,
      results,
    });
  }
}

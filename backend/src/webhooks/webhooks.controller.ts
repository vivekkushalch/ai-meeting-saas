import { Controller, Post, Body } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post('audio-processing-complete')
  handleAudioProcessingComplete(@Body() data: any) {
    return this.webhooksService.handleAudioProcessingComplete(data);
  }
}

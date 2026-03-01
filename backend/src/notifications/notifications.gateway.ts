import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';
import { WsJwtGuard } from './ws-jwt.guard';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'ws/updates',
})
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('subscribe_meeting')
  handleSubscribeMeeting(client: Socket, meetingId: string) {
    client.join(`meeting_${meetingId}`);
    return { event: 'subscribed', data: meetingId };
  }

  sendMeetingUpdate(meetingId: string, data: any) {
    this.server.to(`meeting_${meetingId}`).emit('meeting_update', data);
  }

  sendTaskUpdate(userId: string, data: any) {
    // Ideally use rooms per user
    this.server.emit(`task_update_${userId}`, data);
  }
}

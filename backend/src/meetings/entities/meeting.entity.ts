import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Task } from '../../tasks/entities/task.entity';

export enum MeetingStatus {
  UPCOMING = 'upcoming',
  COMPLETED = 'completed',
  PROCESSING = 'processing',
}

@Entity('meetings')
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column()
  duration: string;

  @Column({
    type: 'enum',
    enum: MeetingStatus,
    default: MeetingStatus.UPCOMING,
  })
  status: MeetingStatus;

  @Column('simple-array', { nullable: true })
  participants: string[];

  @Column({ nullable: true })
  platform: string;

  @Column({ name: 'meeting_link', nullable: true })
  meetingLink: string;

  @Column({ type: 'text', nullable: true })
  summary: string;

  @Column({ type: 'text', nullable: true })
  transcript: string;

  @Column({ type: 'jsonb', nullable: true })
  analysis: any;

  @Column({ name: 'transcript_available', default: false })
  transcriptAvailable: boolean;

  @Column({ name: 'analysis_available', default: false })
  analysisAvailable: boolean;

  @Column({ name: 'audio_url', nullable: true })
  audioUrl: string;

  @Column({ name: 'transcript_url', nullable: true })
  transcriptUrl: string;

  @Column({ name: 'analysis_url', nullable: true })
  analysisUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.meetings)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id' })
  userId: string;

  @OneToMany(() => Task, (task) => task.meeting)
  tasks: Task[];
}

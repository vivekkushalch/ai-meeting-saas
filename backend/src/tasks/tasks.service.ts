import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(userId: string, taskData: any): Promise<Task> {
    const task = this.tasksRepository.create({
      ...taskData,
      userId,
    } as Partial<Task>);
    return this.tasksRepository.save(task);
  }

  async findAll(userId: string, meetingId?: string): Promise<Task[]> {
    const where: any = { userId };
    if (meetingId) {
      where.meetingId = meetingId;
    }
    return this.tasksRepository.find({ where, order: { createdAt: 'DESC' } });
  }

  async findOne(id: string, userId: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id, userId } });
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  async update(id: string, userId: string, updateData: any): Promise<Task> {
    await this.findOne(id, userId);
    await this.tasksRepository.update(id, updateData);
    return this.findOne(id, userId);
  }

  async remove(id: string, userId: string): Promise<void> {
    await this.findOne(id, userId);
    await this.tasksRepository.delete(id);
  }

  async toggle(id: string, userId: string): Promise<Task> {
    const task = await this.findOne(id, userId);
    const newStatus = task.status === TaskStatus.PENDING ? TaskStatus.COMPLETED : TaskStatus.PENDING;
    await this.tasksRepository.update(id, { status: newStatus });
    return this.findOne(id, userId);
  }
}

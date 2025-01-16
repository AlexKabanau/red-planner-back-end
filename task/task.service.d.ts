import { PrismaService } from 'src/prisma.service';
import { TaskDto } from './task.dto';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        priority: import(".prisma/client").$Enums.Priority | null;
        isCompleted: boolean | null;
        userId: string;
    }[]>;
    create(dto: TaskDto, userId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        priority: import(".prisma/client").$Enums.Priority | null;
        isCompleted: boolean | null;
        userId: string;
    }>;
    update(dto: Partial<TaskDto>, taskId: string, userId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        priority: import(".prisma/client").$Enums.Priority | null;
        isCompleted: boolean | null;
        userId: string;
    }>;
    delete(taskId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        priority: import(".prisma/client").$Enums.Priority | null;
        isCompleted: boolean | null;
        userId: string;
    }>;
}

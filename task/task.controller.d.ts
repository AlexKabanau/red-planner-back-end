import { TaskService } from './task.service';
import { TaskDto } from './task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
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
    update(dto: TaskDto, userId: string, id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        priority: import(".prisma/client").$Enums.Priority | null;
        isCompleted: boolean | null;
        userId: string;
    }>;
    delete(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        priority: import(".prisma/client").$Enums.Priority | null;
        isCompleted: boolean | null;
        userId: string;
    }>;
}

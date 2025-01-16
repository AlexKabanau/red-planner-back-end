import { Priority } from '@prisma/client';
export declare class TaskDto {
    name: string;
    isCompleted?: boolean;
    screatedAt?: string;
    priority?: Priority;
}

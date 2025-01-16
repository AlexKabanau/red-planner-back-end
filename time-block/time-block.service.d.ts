import { PrismaService } from 'src/prisma.service';
import { TimeBlockDto } from './dto/time-block.dto';
export declare class TimeBlockService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        color: string | null;
        duration: number;
        order: number;
    }[]>;
    create(dto: TimeBlockDto, userId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        color: string | null;
        duration: number;
        order: number;
    }>;
    update(dto: Partial<TimeBlockDto>, timeBlockId: string, userId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        color: string | null;
        duration: number;
        order: number;
    }>;
    delete(timeBlockId: string, userId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        color: string | null;
        duration: number;
        order: number;
    }>;
    updateOrder(ids: string[]): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        color: string | null;
        duration: number;
        order: number;
    }[]>;
}

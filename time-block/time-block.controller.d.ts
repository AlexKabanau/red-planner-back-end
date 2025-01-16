import { TimeBlockService } from './time-block.service';
import { TimeBlockDto } from './dto/time-block.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class TimeBlockController {
    private readonly timeBlockService;
    constructor(timeBlockService: TimeBlockService);
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
    updateOrder(updateOrderDto: UpdateOrderDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        color: string | null;
        duration: number;
        order: number;
    }[]>;
    update(dto: TimeBlockDto, userId: string, id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        color: string | null;
        duration: number;
        order: number;
    }>;
    delete(userId: string, id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        color: string | null;
        duration: number;
        order: number;
    }>;
}

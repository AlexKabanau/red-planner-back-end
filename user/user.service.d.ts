import { PrismaService } from 'src/prisma.service';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { UserDto } from './user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<{
        tasks: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            priority: import(".prisma/client").$Enums.Priority | null;
            isCompleted: boolean | null;
            userId: string;
        }[];
    } & {
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intervalsCount: number | null;
    }>;
    getByEmail(email: string): Promise<{
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intervalsCount: number | null;
    }>;
    getProfile(id: string): Promise<{
        user: {
            tasks: {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                priority: import(".prisma/client").$Enums.Priority | null;
                isCompleted: boolean | null;
                userId: string;
            }[];
            email: string;
            workInterval: number | null;
            breakInterval: number | null;
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            intervalsCount: number | null;
        };
        statistics: {
            label: string;
            value: number;
        }[];
    }>;
    create(dto: AuthDto): Promise<{
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intervalsCount: number | null;
    }>;
    update(id: string, dto: UserDto): Promise<{
        email: string;
        name: string;
    }>;
}

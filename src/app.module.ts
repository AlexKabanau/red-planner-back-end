import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { TaskModule } from './task/task.module'

@Module({
	controllers: [AppController],
	imports: [AuthModule, UserModule, TaskModule],
	providers: [AppService]
})
export class AppModule {}

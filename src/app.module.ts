import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { TaskModule } from './task/task.module'
import { TimeBlockModule } from './time-block/time-block.module'
import { PomodoroModule } from './pomodoro/pomodoro.module'
// import { AppController } from './app.controller'
// import { AppService } from './app.service'

@Module({
	// controllers: [AppController],
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		TaskModule,
		TimeBlockModule,
		PomodoroModule
	]
	// providers: [AppService]
})
export class AppModule {}

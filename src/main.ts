import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

import * as dotenv from 'dotenv'
dotenv.config()

async function bootstrap() {
	const port = process.env.PORT || 4200
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: 'https://red-planner-front-end-production.up.railway.app',
		credentials: true,
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'Authorization'
		],
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
		exposedHeaders: 'set-cookie'
	})

	await app.listen(port, '::')
}
bootstrap()

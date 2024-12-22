import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: ['http://localhost:3001'],
		credentials: true,
		// allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
		// methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
		exposedHeaders: 'set-cookie'
	})

	await app.listen(process.env.PORT ?? 4200)
}
bootstrap()

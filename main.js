"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.use(cookieParser());
    app.enableCors({
        origin: ['http://localhost:3000'],
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
    });
    await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
//# sourceMappingURL=main.js.map
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


class Swagger {
	static setup(app) {
		const options = new DocumentBuilder()
			.setTitle('Demo API')
			.setDescription("Let's make our dream come true")
			.setVersion('1.0')
			.addBearerAuth()
			.build();

		const document = SwaggerModule.createDocument(app, options);
		SwaggerModule.setup('/docs', app, document);
	}
}


async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	Swagger.setup(app);

	app.useGlobalPipes(new ValidationPipe());

	await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS allow frontend
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Enable DTO validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(3001);
  console.log('Backend running on http://localhost:3001');
}
bootstrap();

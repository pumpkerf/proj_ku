import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //fixed browser for communication between frontend and backend
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

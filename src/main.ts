import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00' //fuso horario brasileiro

  app.useGlobalPipes(new ValidationPipe()); // Vai ser usado para fazer validações no projeto
  
  app.enableCors();
  

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

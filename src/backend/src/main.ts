import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3001;
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  await app.listen(PORT, () => {
    console.log(
      `Running API in MODE: ${process.env.NODE_ENV} on PORT: ${PORT}`
    )
  });
}
bootstrap();

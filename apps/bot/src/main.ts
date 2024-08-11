import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from '@bot/modules/trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get(TrpcRouter, { strict: false });
  trpc.applyMiddleware(app);
  await app.listen(4000);
}
bootstrap();

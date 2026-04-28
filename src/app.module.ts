import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './store/user.controller.js';
import { UserProvider } from './store/user.service.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      maxQueryExecutionTime: 1000,
      retryAttempts: 3,
      retryDelay: 3000,
      poolSize: 10,
    }),
  ],
  controllers: [UserController],
  providers: [UserProvider],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity.js';
import { UserController } from './user.controller.js';
import { UserProvider } from './user.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserProvider],
  exports: [UserProvider],
})
export class AppModule {}

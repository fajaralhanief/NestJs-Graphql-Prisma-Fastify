import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  providers: [PrismaService, UserService, UserResolver]
})
export class UserModule {}

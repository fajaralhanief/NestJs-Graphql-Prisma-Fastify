import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(UserWhereInput: Prisma.UserWhereInput): Promise<any> {
    const user = await this.authService.validateUser(UserWhereInput);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor( 
  @Inject(PrismaService)private prisma: PrismaService,
  private jwtService: JwtService,
  
  ) {}

  async validateUser(UserWhereInput: Prisma.UserWhereInput): Promise<any> {
    const user = await this.prisma.user.findFirst({
        where:UserWhereInput,
    });
    
    if (user && user.pass === UserWhereInput.AND[1].pass.equals) {
      const { pass, ...result } = user;
      return result;
    }
    return null;
  }

  async login(whereLogin: any) {
    const user = await this.validateUser({
      AND:[
        {
          email:{
            equals:whereLogin.email,
          }
        },
        {
          pass:{
            equals:whereLogin.pass,
          }
        }
      ]


    })
    if (user == null){
      throw new Error( "Invalid Password" )

    }
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload)
    console.log({token})
    return this.jwtService.sign(payload);
  }
  
}
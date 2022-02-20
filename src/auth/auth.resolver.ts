import { Resolver, Args, Mutation } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { WhereLogin } from 'src/dto/whereLogin.input';
import { UserToken } from 'src/user/userToken.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService){}
        //@UseGuards(LocalAuthGuard)
        @Mutation(returns => UserToken)
        async loginUser(@Args('whereLogin') whereLogin : WhereLogin) {
          
          return {user_token : await this.authService.login(whereLogin)};
        }

}
    

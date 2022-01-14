import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Int } from '@nestjs/graphql';
import {UserArgs} from 'src/dto/getUser.args';
import { AddUser } from 'src/dto/addUser.input';
import { DeleteUserArgs } from 'src/dto/deleteOneUser.args';
import { UpdateUserArgs } from 'src/dto/updateUser.args';
import { GetUsersArgs } from 'src/dto/getUsers.args';
import { GetUserById } from 'src/dto/getUserById.args';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService){}

        @Query(returns => [User])
        users(@Args() getUsersArgs: GetUsersArgs 
        ): Promise<User[]> {
            return this.userService.users(getUsersArgs);
        }


        @Query(returns => User)
        async getUser(@Args() getUserById: GetUserById) {
          return this.userService.user(getUserById);
        }

        @Mutation(returns => User)
        async createUser(@Args('addUser') addUser : AddUser) {
        return this.userService.createUser(addUser);
        }

        @Mutation(returns => User)
        async updateUser( 
            @Args() updateUserArgs : UpdateUserArgs
        ): Promise<User> {
        return this.userService.updateUser(updateUserArgs);
        }

        @Mutation(returns => User)
        async deleteUser(@Args() deleteUserArgs: DeleteUserArgs) {
        return this.userService.deleteUser(deleteUserArgs);
        }

}
    


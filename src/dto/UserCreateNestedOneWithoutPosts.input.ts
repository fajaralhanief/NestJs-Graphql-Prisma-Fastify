import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutPosts } from './UserCreateOrConnectWithoutPosts.input';
import { UserCreateWithoutPosts } from './UserCreateWithoutPosts.input';
import { UserUncheckedCreateWithoutPosts } from './UserUncheckedCreateWithoutPosts.input';
import { UserWhereUnique } from './UserWhereUnique.input';

@InputType()
export class UserCreateNestedOneWithoutPosts {

  @Field((type) => UserCreateWithoutPosts, {nullable:true})
  create?: UserCreateWithoutPosts
  
  @Field((type) => UserCreateOrConnectWithoutPosts, {nullable:true})
  connectOrCreate?: UserCreateOrConnectWithoutPosts
  
  @Field((type) => UserWhereUnique, {nullable:true})
  connect?: UserWhereUnique

}


  

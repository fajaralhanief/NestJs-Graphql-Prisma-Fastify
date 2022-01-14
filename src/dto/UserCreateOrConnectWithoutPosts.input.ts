import { Field, InputType } from '@nestjs/graphql';
import { UserCreateWithoutPosts } from './UserCreateWithoutPosts.input';
import { UserUncheckedCreateWithoutPosts } from './UserUncheckedCreateWithoutPosts.input';
import { UserWhereUnique } from './UserWhereUnique.input';

@InputType()
export class UserCreateOrConnectWithoutPosts {

  @Field((type) => UserWhereUnique)
  where: UserWhereUnique

  @Field((type) => UserCreateWithoutPosts)
  create: UserCreateWithoutPosts

}


import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateWithoutPosts {

  @Field()
  email: string

  @Field({nullable:true})
  name?: string | null
}
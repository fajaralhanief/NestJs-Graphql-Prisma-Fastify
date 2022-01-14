import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserUncheckedCreateWithoutPosts {

@Field((type) => Int)
id?: number

@Field()
email: string

@Field()
name?: string | null

}
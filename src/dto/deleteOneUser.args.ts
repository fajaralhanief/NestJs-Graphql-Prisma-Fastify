import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { PostCategory } from '@prisma/client';

@ArgsType()
export class DeleteUserArgs {
  @Field((type) => Int)
  id?: number;
}
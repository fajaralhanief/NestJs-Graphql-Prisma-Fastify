import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Post } from '@prisma/client';

@ArgsType()
export class PostCategoryArgs {
  @Field((type) => Int)
  id?: number;

  @Field({ defaultValue: '' })
  @MinLength(3)
  category: string;

  // @Field({ defaultValue: '' })
  // @MinLength(3)
  // post: Post[];
}
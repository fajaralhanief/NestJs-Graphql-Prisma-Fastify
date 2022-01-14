import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { PostCategory } from 'src/post-category/post-category.entity';


@ArgsType()
export class PostArgs {
  @Field((type) => Int)
  id?: number;

  @Field({ defaultValue: '' })
  @MinLength(3)
  title: string;

  @Field({ defaultValue: '' })
  @MinLength(3)
  content: string;

  @Field((type) => Int)
  authorId?: number;
  
  @Field({ defaultValue: '' })
  @MinLength(3)
  author: string;

  // @Field({ defaultValue: '' })
  // @MinLength(3)
  // postCategory: PostCategory[];
}
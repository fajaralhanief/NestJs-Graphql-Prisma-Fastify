import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { UpdatePost } from './updatePost.input';
import { WhereUpdatePost } from './whereUpdatePost.input';

@ArgsType()
export class UpdatePostArgs {
  @Field((type) => WhereUpdatePost, {nullable: true})
  where: WhereUpdatePost;

  @Field((type) => UpdatePost,{ nullable: false })
  @ValidateNested()
  data!: UpdatePost;

  


}
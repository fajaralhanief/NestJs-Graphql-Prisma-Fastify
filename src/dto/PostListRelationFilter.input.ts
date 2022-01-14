import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int, InputType } from '@nestjs/graphql';
import { WherePost } from './wherePost.input';

@InputType()
export class PostListRelationFilter {
  @Field((type) => WherePost, {nullable:true})
  every?: WherePost

  @Field((type) => WherePost, { nullable: true })
  some?: WherePost;

  @Field((type) => WherePost, { nullable: true })
  none?: WherePost;

  


}
import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { WherePost } from './wherePost.input';

@ArgsType()
export class GetPostsArgs {

  @Field((type) => Int)
  skip?: number;

  @Field((type) => Int)
  take?: number;

  @Field()
  where?: WherePost;



}
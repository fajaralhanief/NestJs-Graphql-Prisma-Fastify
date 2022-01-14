import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { WhereUpdatePost } from './whereUpdatePost.input';

@ArgsType()
export class GetUpdatePostArgs {

  @Field((type) => Int)
  skip?: number;

  @Field((type) => Int)
  take?: number;

  @Field()
  where?: WhereUpdatePost;



}
import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { WhereUpdateUser } from './whereUpdateUser.input';
import { WhereUpdatePostCategory } from './whereUpdatePostCategory.input';

@ArgsType()
export class GetUpdatePostCategoryArgs {

  @Field((type) => Int)
  skip?: number;

  @Field((type) => Int)
  take?: number;

  @Field()
  where?: WhereUpdatePostCategory;



}
import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { WherePostCategory } from './wherePostCategories.input';

@ArgsType()
export class GetPostCategoriesArgs {

  @Field((type) => Int)
  skip?: number;

  @Field((type) => Int)
  take?: number;

  @Field()
  where?: WherePostCategory;

}
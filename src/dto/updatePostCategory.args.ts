import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { UpdatePostCategory } from './updatePostCategory.input';
import { WhereUpdatePostCategory } from './whereUpdatePostCategory.input';

@ArgsType()
export class UpdatePostCategoryArgs {
  @Field((type) => WhereUpdatePostCategory, {nullable: true})
  where: WhereUpdatePostCategory;

  @Field((type) => UpdatePostCategory,{ nullable: false })
  @ValidateNested()
  data!: UpdatePostCategory;

}
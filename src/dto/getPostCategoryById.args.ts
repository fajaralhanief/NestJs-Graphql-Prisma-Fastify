import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class GetPostCategoryById {
  @Field((type) => Int,{nullable: false})
  id : number;
}
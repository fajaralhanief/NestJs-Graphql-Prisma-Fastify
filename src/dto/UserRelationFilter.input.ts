
import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int, InputType } from '@nestjs/graphql';
import { UserWhereInput } from './UserWhere.input';

@InputType()
export class UserRelationFilter {
  @Field((type) => UserWhereInput, {nullable:true})
  is?: UserWhereInput

  @Field((type) => UserWhereInput, { nullable: true })
  isNot?: UserWhereInput;

  


}
import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int, InputType } from '@nestjs/graphql';

@InputType()
export class StringFilter {
  @Field({nullable: true})
  contains?: string;

  @Field({ nullable: true })
  equals?: string;

}
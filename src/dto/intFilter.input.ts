import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int, InputType } from '@nestjs/graphql';

@InputType()
export class IntFilter {
  @Field((type) => [Int], {nullable:true})
  in?: Array<number>

  @Field((type) => Int, { nullable: true })
  equals?: number;

  


}
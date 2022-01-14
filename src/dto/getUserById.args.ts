import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUserById {
  @Field((type) => Int,{nullable: false})
  id : number;

  @Field({nullable: false})
  email : string;

}
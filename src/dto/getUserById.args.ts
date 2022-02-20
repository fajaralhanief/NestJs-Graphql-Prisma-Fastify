import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUserById {
  @Field((type) => Int,{nullable: true})
  id : number;

  @Field({nullable: true})
  email : string;

}
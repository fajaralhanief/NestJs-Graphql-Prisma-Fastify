import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class UserArgs {
  @Field((type) => Int,{nullable:true})
  id?: number;

  @Field({nullable:true})
  name?: string;

  @Field({nullable:true})
  email: string;

  @Field({nullable:true})
  pass: string;

  @Field({nullable:true})
  posts?: string;
}
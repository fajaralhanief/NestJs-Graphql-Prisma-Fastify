import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class AddUser {
  @Field(type=> String ,{nullable:true})
  name?: string;
  
  @Field(type=> String ,{nullable:true})
  email: string;

  @Field(type=> String ,{nullable:true})
  pass: string;


  // @Field({nullable:true})
  // @MaxLength(30)
  // posts?: string;
  

}

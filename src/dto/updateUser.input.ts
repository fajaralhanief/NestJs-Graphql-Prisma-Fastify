import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class UpdateUser {
  @Field()
  @MaxLength(30)
  name: string;
  
  @Field()
  @MaxLength(30)
  email: string;

}

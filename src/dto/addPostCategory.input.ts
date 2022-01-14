import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class AddPostCategory {
  @Field()
  @MaxLength(20)
  category: string;
 
}

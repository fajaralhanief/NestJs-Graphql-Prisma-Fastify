import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class UpdatePostCategory {
  @Field()
  @MaxLength(30)
  category: string;

}

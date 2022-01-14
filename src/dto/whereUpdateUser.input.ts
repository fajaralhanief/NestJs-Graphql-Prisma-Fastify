import { Field, InputType, Int } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
import { IntFilter } from './intFilter.input';
import { StringFilter } from './stringFilter.input';

@InputType()
export class WhereUpdateUser {
  
  @Field((type) => Int, {nullable:true})
  id?: number;
  
  @Field({nullable:true})
  @MaxLength(30)
  email?: string;
}

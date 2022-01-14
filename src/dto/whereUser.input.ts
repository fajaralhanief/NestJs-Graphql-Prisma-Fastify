import { Field, InputType, Int } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
import { IntFilter } from './intFilter.input';
import { StringFilter } from './stringFilter.input';

@InputType()
export class WhereUser {
  @Field((type) => IntFilter, {nullable:true})
  id: IntFilter;
  
  @Field((type) => StringFilter,{nullable:true})
  @MaxLength(30)
  name?: StringFilter;
  
  @Field((type) => StringFilter,{nullable:true})
  @MaxLength(30)
  email?: StringFilter;
}

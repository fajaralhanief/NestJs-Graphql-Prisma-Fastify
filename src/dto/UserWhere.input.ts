import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int, InputType } from '@nestjs/graphql';
import { IntFilter } from './intFilter.input';
import { StringFilter } from './stringFilter.input';
import { PostListRelationFilter } from './PostListRelationFilter.input';

@InputType()
export class UserWhereInput {
  @Field((type) => IntFilter, {nullable:true})
  id?: IntFilter 

  @Field((type) => StringFilter, { nullable: true })
  email?: StringFilter 

  @Field((type) => StringFilter, { nullable: true })
  name?: StringFilter 

  @Field((type) => StringFilter, { nullable: true })
  posts?: PostListRelationFilter 

  


}
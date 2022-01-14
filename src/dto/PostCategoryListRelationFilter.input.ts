import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { IntFilter } from './intFilter.input';
import { StringFilter } from './stringFilter.input';
import { UserRelationFilter } from './UserRelationFilter.input';
import { WherePostCategory } from './wherePostCategories.input';

@InputType()
export class PostCategoryListRelationFilter {
  @Field((type) => WherePostCategory, {nullable:true})
  every?: WherePostCategory;
  
  @Field((type) => WherePostCategory, {nullable:true})
  some?: WherePostCategory;
  
  @Field((type) => WherePostCategory, {nullable:true})
  none?: WherePostCategory;

 
}

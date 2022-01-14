import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { IntFilter } from './intFilter.input';
import { PostCategoryListRelationFilter } from './PostCategoryListRelationFilter.input';
import { StringFilter } from './stringFilter.input';
import { UserRelationFilter } from './UserRelationFilter.input';

@InputType()
export class WherePost {
  @Field((type) => IntFilter, {nullable:true})
  id: IntFilter;
  
  @Field((type) => StringFilter, {nullable:true})
  @MaxLength(30)
  title?: StringFilter;
  
  @Field((type) => StringFilter, {nullable:true})
  @MaxLength(30)
  content?: StringFilter;

  @Field((type) => IntFilter, {nullable:true})
  authorId: IntFilter;

  @Field((type) => UserRelationFilter, {nullable:true})
  author: UserRelationFilter;

  @Field((type) => PostCategoryListRelationFilter, {nullable:true})
  category: PostCategoryListRelationFilter;
}

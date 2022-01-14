import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { IntFilter } from './intFilter.input';
import { PostListRelationFilter } from './PostListRelationFilter.input';
import { StringFilter } from './stringFilter.input';

@InputType()
export class WherePostCategory {
  @Field((type) => IntFilter, {nullable:true})
  id: IntFilter;
  
  @Field((type) =>StringFilter,{nullable:true})
  @MaxLength(30)
  category?: StringFilter;

  @Field((type) =>StringFilter,{nullable:true})
  @MaxLength(30)
  posts?: PostListRelationFilter;
}



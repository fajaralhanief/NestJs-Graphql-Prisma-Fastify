import { Field, InputType } from '@nestjs/graphql';
import { PostCategoryCreateOrConnectWithoutPosts } from './PostCategoryCreateOrConnectWithoutPosts.input';
import { PostCategoryCreateWithoutPosts } from './PostCategoryCreateWithoutPosts.input';
import { PostCategoryWhereUnique } from './PostCategoryWhereUnique.input';

@InputType()
export class PostCategoryCreateNestedManyWithoutPosts {

  @Field((type) => PostCategoryCreateWithoutPosts, {nullable:true})
  create?: PostCategoryCreateWithoutPosts
  
  @Field((type) => PostCategoryCreateOrConnectWithoutPosts , {nullable:true})
  connectOrCreate?: PostCategoryCreateOrConnectWithoutPosts
  
  @Field((type) => PostCategoryWhereUnique, {nullable:true})
  connect?: PostCategoryWhereUnique

}


  

import { Field, InputType } from '@nestjs/graphql';
import { PostCategoryCreateWithoutPosts } from './PostCategoryCreateWithoutPosts.input';
import { PostCategoryWhereUnique } from './PostCategoryWhereUnique.input';

@InputType()
export class PostCategoryCreateOrConnectWithoutPosts {

  @Field((type) => PostCategoryWhereUnique)
  where: PostCategoryWhereUnique

  @Field((type) => PostCategoryCreateWithoutPosts)
  create: PostCategoryCreateWithoutPosts

}


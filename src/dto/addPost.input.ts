import { Field, InputType } from '@nestjs/graphql';
import { PostCategoryCreateNestedManyWithoutPosts } from './PostCategoryCreateNestedManyWithoutPosts.input';
import { UserCreateNestedOneWithoutPosts } from './UserCreateNestedOneWithoutPosts.input';

@InputType()
export class AddPost {
  
  @Field()
  title: string;

  @Field()
  content: string;

  @Field((type) => UserCreateNestedOneWithoutPosts)
  author?: UserCreateNestedOneWithoutPosts;

  @Field((type) =>PostCategoryCreateNestedManyWithoutPosts)
  category?: PostCategoryCreateNestedManyWithoutPosts;

}

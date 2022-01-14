import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostCategoryCreateWithoutPosts {

  @Field({nullable:true})
  category?: string | null
}
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PostCategoryWhereUnique {
  @Field((type) => Int, {nullable:true})
  id?: number

}
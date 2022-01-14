import { Field, Int, ObjectType } from "@nestjs/graphql";
import { PostCategory } from "src/post-category/post-category.entity";

@ObjectType()
export class Post {
    @Field(type => Int)
    id: number;

    @Field()
    title : string;

    @Field()
    content : string;

    @Field(type => Int)
    authorId : number;

    // @Field()
    // author: string;
  
    // @Field()
    // category: PostCategory[];
    
}
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PostCategory {
    @Field(type => Int)
    id: number;

    @Field()
    category : string;
}
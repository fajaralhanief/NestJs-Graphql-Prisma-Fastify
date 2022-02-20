import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserToken {
    @Field({nullable:true})
    user_token : string

}
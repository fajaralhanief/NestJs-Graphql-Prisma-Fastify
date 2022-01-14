import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserWhereUnique {
  @Field((type) => Int, {nullable:true})
  id?: number

  @Field({nullable:true})
  email?: string

}


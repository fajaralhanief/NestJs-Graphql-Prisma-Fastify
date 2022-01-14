import { MinLength, ValidateNested } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { UpdateUser } from './updateUser.input';
import { WhereUpdateUser } from './whereUpdateUser.input';

@ArgsType()
export class UpdateUserArgs {
  @Field((type) => WhereUpdateUser, {nullable: true})
  where: WhereUpdateUser;

  @Field((type) => UpdateUser,{ nullable: false })
  @ValidateNested()
  data!: UpdateUser;

  


}
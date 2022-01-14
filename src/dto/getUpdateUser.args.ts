import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { WhereUpdateUser } from './whereUpdateUser.input';

@ArgsType()
export class GetUpdateUserArgs {

  @Field((type) => Int)
  skip?: number;

  @Field((type) => Int)
  take?: number;

  @Field()
  where?: WhereUpdateUser;



}
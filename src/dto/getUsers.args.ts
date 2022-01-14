import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';
import { WhereUser } from './whereUser.input';

@ArgsType()
export class GetUsersArgs {

  @Field((type) => Int)
  skip?: number;

  @Field((type) => Int)
  take?: number;

  @Field()
  where?: WhereUser;



}
import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class WhereLogin {

    // @Field((type)=> Int,{nullable:true})
    // @MaxLength(30)
    // id?: number;
  
    @Field({nullable:true})
    @MaxLength(30)
    email?: String;

    @Field({nullable:true})
    @MaxLength(30)
    pass?: String;
}

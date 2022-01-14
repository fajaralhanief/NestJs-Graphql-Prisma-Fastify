import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class UpdatePost {
    @Field()
    @MaxLength(20)
    authorId: string;
    
    @Field()
    @MaxLength(20)
    title: string;
  
    @Field()
    @MaxLength(50)
    content: string;

}

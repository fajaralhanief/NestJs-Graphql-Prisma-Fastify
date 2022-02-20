import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PostCategoryModule } from './post-category/post-category.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }),
    UserModule,
    PostModule,
    PostCategoryModule,
    AuthModule,

  ],
})
export class AppModule {}

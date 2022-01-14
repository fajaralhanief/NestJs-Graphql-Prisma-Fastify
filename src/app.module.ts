import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PostCategoryModule } from './post-category/post-category.module';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { PostCategoryService } from './post-category/post-category.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }),
    UserModule,
    PostModule,
    PostCategoryModule,

  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PostCategoryService } from './post-category.service';
import { PostCategoryResolver } from './post-category.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PostCategoryService, PostCategoryResolver,PrismaService]
})
export class PostCategoryModule {}

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PostCategoryService } from './post-category/post-category.service';
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';
import { User as UserModel, Post as PostModel, PostCategory as PostCategoryModel } from '@prisma/client';

@Controller()
export class AppController {}
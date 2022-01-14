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
export class AppController {
  // constructor(
  //   private readonly userService: UserService,
  //   private readonly postService: PostService,
  //   private readonly postCategoryService: PostCategoryService,
  // ) {}

  // //user
  // @Get('getuser/:id')
  // async getUserById(@Param('id') id: string): Promise<UserModel> {
  //   return this.userService.user({ id: Number(id) });
  // }

  // @Post('user')
  // async signupUser(
  //   @Body() userData: { name?: string; },
  // ): Promise<UserModel> {
  //   return this.userService.createUser(userData);
  // }

  // @Put('updateUser/:id')
  // async updateUser(@Param('id') id: string): Promise<UserModel> {
  //   return this.userService.updateUser({
  //     where: { id: Number(id) },
  //     data: { },
  //   });
  // }

  // @Delete('deleteUser/:id')
  // async deleteUser(@Param('id') id: string): Promise<UserModel> {
  //   return this.userService.deleteUser({ id: Number(id) });
  // }

  // //post
  // @Get('post/:id')
  // async getPostById(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.post({ id: Number(id) });
  // }

  // @Get('feed')
  // async getPublishedPosts(): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: { },
  //   });
  // }

  // @Get('filtered-posts/:searchString')
  // async getFilteredPosts(
  //   @Param('searchString') searchString: string,
  // ): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: {
  //       OR: [
  //         {
  //           post: { contains: searchString },
  //         }
  //       ],
  //     },
  //   });
  // }

  // @Post('post')
  // async createDraft(
  //   @Body() postData: { post?: string; },
  // ): Promise<PostModel> {
  //   const { post } = postData;
  //   return this.postService.createPost({
  //    post,
  //   });
  // }

  // @Put('publish/:id')
  // async publishPost(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.updatePost({
  //     where: { id: Number(id) },
  //     data: { },
  //   });
  // }

  // @Delete('post/:id')
  // async deletePost(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.deletePost({ id: Number(id) });
  // }

  // //categorypost

  // @Post('postCategory')
  // async createPostCategory(
  //   @Body() postCategoryData: { category?: string; },
  // ): Promise<PostCategoryModel> {
  //   return this.postCategoryService.createPostCategory(postCategoryData);
  // }

  // @Get('postCategory/:id')
  // async getPostCategoryById(@Param('id') id: string): Promise<PostCategoryModel> {
  //   return this.postCategoryService.postCategory({ id: Number(id) });
  // }

  // @Put('publishCategory/:id')
  // async publishPostCategory(@Param('id') id: string): Promise<PostCategoryModel> {
  //   return this.postCategoryService.updatePostCategory({
  //     where: { id: Number(id) },
  //     data: { },
  //   });
  // }  
  
  // @Delete('postCategory/:id')
  // async deletePostCategory(@Param('id') id: string): Promise<PostCategoryModel> {
  //   return this.postCategoryService.deletePostCategory({ id: Number(id) });
  // }







}
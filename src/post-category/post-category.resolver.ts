import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddPostCategory } from 'src/dto/addPostCategory.input';
import { DeletePostCategoryArgs } from 'src/dto/deleteOnePostCategory.args';
import { GetPostCategoriesArgs } from 'src/dto/getPostCategories.args';
import { GetPostCategoryById } from 'src/dto/getPostCategoryById.args';
import { UpdatePostCategoryArgs } from 'src/dto/updatePostCategory.args';
import { PostCategory } from './post-category.entity';
import { PostCategoryService } from './post-category.service';

@Resolver()
export class PostCategoryResolver {
    
    constructor(private postCategoryService: PostCategoryService){}

    @Query(returns => [PostCategory])
        postCategories(@Args() getPostCategoriesArgs: GetPostCategoriesArgs 
        ): Promise<PostCategory[]> {
            return this.postCategoryService.postCategories(getPostCategoriesArgs);
        }



    @Query(returns => PostCategory)
    async getCategory(@Args() getPostCategoryById: GetPostCategoryById) {
      return this.postCategoryService.postCategory(getPostCategoryById);
    }


    @Mutation(returns => PostCategory)
    async createPostCategory(@Args('addPostCategory') addPostCategory: AddPostCategory) {
    return this.postCategoryService.createPostCategory(addPostCategory);
    }

    @Mutation(returns => PostCategory)
    async updatePostCategory( 
        @Args() updatePostCategoryArgs:UpdatePostCategoryArgs 
    ): Promise<PostCategory> {
    return this.postCategoryService.updatePostCategory(updatePostCategoryArgs);
    }

    @Mutation(returns => PostCategory)
    async deletePostCategory(@Args() deletePostCategoryArgs: DeletePostCategoryArgs) {
    return this.postCategoryService.deletePostCategory(deletePostCategoryArgs);
    }


}

import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { AddPost } from 'src/dto/addPost.input';
import { DeletePostArgs } from 'src/dto/deleteOnePost.args';
import { GetPostById } from 'src/dto/getPostById.args';
import { GetPostsArgs } from 'src/dto/getPosts.args';
import { UpdatePostArgs } from 'src/dto/updatePost.args';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
    constructor(private postService: PostService){}
    @Query(returns => [Post])
    posts(@Args() getPostsArgs: GetPostsArgs 
    ): Promise<Post[]> {
        return this.postService.posts(getPostsArgs);
    }


    @Query(returns => Post)
    async getPost(@Args() getPostById: GetPostById) {
      return this.postService.post(getPostById);
    }

    @Mutation(returns => Post)
    async createPost(@Args('addPost') addPost: AddPost) {
    return this.postService.createPost(addPost);
    }

    @Mutation(returns => Post)
    async updatePost( 
        @Args() updatePostArgs: UpdatePostArgs
    ): Promise<Post> {
    return this.postService.updatePost(updatePostArgs);
    }

    @Mutation(returns => Post)
    async deletePost(@Args() deletePostArgs: DeletePostArgs) {
    return this.postService.deletePost(deletePostArgs);
    }


}

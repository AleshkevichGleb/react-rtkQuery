import {EventHandler, FC} from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../types/types';

const PostContainer:FC = () => {
    const {data: posts, isLoading, isError, error} = postAPI.useFetchAllPostsQuery(200);
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();

    const handleNewPost = async() => {
        const title = prompt();
        await createPost({title, body: title} as IPost)
    }
    
    
    return (
        <div>
            <button onClick={handleNewPost}>Add new Post</button>
            {isError && <h3>fdfdg</h3>}
            {isLoading && <h3>Loading...</h3>}
            {
                posts?.map(post => 
                    <PostItem key={post.id} post = {post} remove={deletePost}  update={updatePost}/>    
                )
            }
        </div>
    );
};

export default PostContainer;

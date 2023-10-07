import {FC} from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer:FC = () => {
    const {data: posts, isLoading, isError, error} = postAPI.useFetchAllPostsQuery(10);
    return (
        <div>
            {isError && <h3>fdfdg</h3>}
            {isLoading && <h3>Loading...</h3>}
            {
                posts?.map(post => 
                    <PostItem key={post.id} post = {post}/>    
                )
            }
        </div>
    );
};

export default PostContainer;

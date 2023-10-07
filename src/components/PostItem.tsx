import {FC} from 'react';
import { IPost } from '../types/types';

interface PostItemProps {
    post: IPost,
}

const PostItem: FC<PostItemProps> = ({post}) => {

    return (
        <div>
            {post.id} {post.title}
            <button>Delete</button>
        </div>
    );
};

export default PostItem;
import {FC} from 'react';
import { IPost } from '../types/types';

interface PostItemProps {
    post: IPost,
    remove: (post: IPost) => void,
    update: (post: IPost) => void,
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    const handleUpdate = () => {
        const title = prompt();
        update({title, body: title, id: post.id} as IPost);
    }

    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post)
    }

    return (
        <div onClick={handleUpdate} style={{padding: '20px', border: '1px solid black'}}>
            {post.id} {post.title}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default PostItem;
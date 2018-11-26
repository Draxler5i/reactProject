import React from 'react';
import { Link } from 'react-router-dom';

const PostBody = ({posts, id}) => {

    const post = {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur "
        }

    if (!post) {
        return <div> El Usuario no fue encontrado</div>
    }
    return (
        <div>
            <h1>
                {JSON.stringify(post)}
            </h1>
            <div>
                <Link to={`/${post.userId}`}>Author</Link>
            </div>
        </div>
    );
};

export default PostBody;
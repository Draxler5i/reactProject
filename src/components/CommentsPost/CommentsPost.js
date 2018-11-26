import React from 'react';

const CommentsPost = ({comments, findPost}) => {
    //console.log(findPost);
    return (
        <div>
            <h1>Comentarios del Post</h1>

            <ul>
            {comments.map((comment) => (
                    <li key={comment.id}>
                        {comment.email}
                        <br/>
                        {comment.body}
                    </li>    
            ))}
            </ul>
        </div>
    );

}

export default CommentsPost;
import React from 'react';

const CommentsPost = ({comments, actualPost}) => {
    
    const comentsPost = comments.filter((item) => item.postId === actualPost.id);

    if (JSON.stringify(comentsPost) === '{}') {
        return <h2>----Comments Post----</h2>
    }
    return (
        <div>
            <h1>Comentarios del Post</h1>

            <ul>
            {comentsPost.map((comment) => (
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
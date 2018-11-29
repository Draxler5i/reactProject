import React from 'react';
import { Container } from 'semantic-ui-react';

const CommentsPost = ({comments, actualPost}) => {
    
    const comentsPost = comments.filter((item) => item.postId === actualPost.id);

    if (JSON.stringify(comentsPost) === '{}') {
        return <Container>----Comments Post----</Container>
    }
    return (
        <Container>
            <h3>Comentarios del Post</h3>
            <Container>
            <ul>
                {comentsPost.map((comment) => (
                        <li key={comment.id}>
                            {comment.email}
                            <br/>
                            {comment.body}
                        </li>    
                ))}
                </ul>
            </Container>
        </Container>
    );

}

export default CommentsPost;
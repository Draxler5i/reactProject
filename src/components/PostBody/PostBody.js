import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './PostBody.css';

const PostBody = ({findPost}) => {

    if (JSON.stringify(findPost) === '{}') {
        return <Container><h2>----Post----</h2></Container>
    }
    return (
        <Container>
            <h1>{findPost.title}</h1>
            <p>
                {findPost.body}
            </p>
            <div className="Author">
                <Link to={`/${findPost.userId}`}>Author</Link>
            </div>
        </Container>
    );
};

export default PostBody;
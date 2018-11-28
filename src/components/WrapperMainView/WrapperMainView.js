import React, { Component } from 'react';
import CommentsPost from '../CommentsPost/CommentsPost';

import PostBody from '../PostBody/PostBody';

import SearchBar from '../SearchBar/SearchBar';

class WrapperMainView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            comments:[],
            posts:[],
            findPost:{},
            userPost:{},
            isLoaded: false
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    comments: json                    
                })
        });
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    posts: json,
                    isLoaded: true
                })
        });
    }
    render() {
        
        const { comments, posts } = this.state;
        const fakePost = {
            "userId": 9,
            "id": 1,
            "title": "Titulo de Post",
            "body": "Este es un ejempo de body "
          };

        return (
            <div>
                <SearchBar posts={posts}  encontrado={this.state.findPost}/>
                <PostBody findPost={fakePost}/>
                <CommentsPost comments={comments} findPost={this.state.findPost}/>
            </div>
        );
    }
};

export default WrapperMainView;
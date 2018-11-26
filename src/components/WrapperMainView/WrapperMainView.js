import React, { Component } from 'react';
import CommentsPost from '../CommentsPost/CommentsPost';
import Autocomplete from '../Autocomplete/Autocomplete';
import PostBody from '../PostBody/PostBody';

class WrapperMainView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            comments:[],
            posts:[],
            findPost:1,
            isLoaded: false
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    users: json
                })
        });
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
        const { isLoaded, users, comments, posts } = this.state;

        return (
            <div>
                <Autocomplete
                suggestions={[
                "Alligator",
                "Bask",
                "Crocodilian",
                "Death Roll",
                "Eggs",
                "Jaws",
                "Reptile",
                "Solitary",
                "Tail",
                "Wetlands"
                ]} />
                <PostBody posts={posts} id={`1`}/>
                <CommentsPost comments={comments} findPost={this.state.findPost}/>
            </div>
        );
    }
};

export default WrapperMainView;
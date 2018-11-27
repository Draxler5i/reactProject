import React, { Component } from 'react';
import CommentsPost from '../CommentsPost/CommentsPost';
import Autocomplete from '../Autocomplete/Autocomplete';
import PostBody from '../PostBody/PostBody';
import WrapperProfile from '../WrapperProfile/WrapperProfile';

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
        const { isLoaded, comments, posts } = this.state;
        const fakePost = {
            "userId": 3,
            "id": 1,
            "title": "Titulo de Post",
            "body": "Este es un ejempo de body "
          };

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
                <PostBody findPost={fakePost}/>
                <CommentsPost comments={comments} findPost={this.state.findPost}/>
            </div>
        );
    }
};

export default WrapperMainView;
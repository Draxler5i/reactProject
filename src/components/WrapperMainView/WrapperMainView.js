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
            comentsPost:[],
            isLoaded: false
        }
        this.findPostSearchBar = this.findPostSearchBar.bind(this);
    }
    
    findPostSearchBar(newPost) {
        console.log(newPost);
        const nuevoPost = {
            //id: {target: {key}}
        };
        this.setState({
            findPost:nuevoPost
        })
 //       findComments(newPost);
    }

    findComments( actualPost ) {

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
                {<SearchBar posts={posts}  changeFindPost={this.findPostSearchBar}/>}
                <PostBody findPost={fakePost}/>
                <CommentsPost comments={comments}/>
            </div>
        );
    }
};

export default WrapperMainView;
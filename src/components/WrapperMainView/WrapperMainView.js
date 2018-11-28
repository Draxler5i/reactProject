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
    
    findPostSearchBar(id) {
        const findPost = this.state.posts.find((item) => item.id === id);
        this.setState({
            findPost
        })
        console.log(findPost);
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

        return (
            <div>
                {<SearchBar posts={posts}  changeFindPost={this.findPostSearchBar}/>}
                <PostBody findPost={this.state.findPost}/>
                <CommentsPost comments={comments}/>
            </div>
        );
    }
};

export default WrapperMainView;
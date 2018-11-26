import React, { Component } from 'react';
import CommentsPost from '../CommentsPost/CommentsPost';
import Autocomplete from '../Autocomplete/Autocomplete';
import PostBody from '../PostBody/PostBody';
import { Link } from 'react-router-dom';

class WrapperMainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true
                })
            });
    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded) {
            return (
            <div>
                <div>Loading...</div>
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
                <PostBody id={`1`}/>
                <CommentsPost/>   
            </div>
            )
        } else {
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
                    <br />
                    Data has been loaded
                    <br/>
                    <PostBody id={`1`}/>
                    <CommentsPost/>
                </div>
            );
        }
    }
};

export default WrapperMainView;
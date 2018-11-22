import React, { Component } from 'react';

class AllUsers extends Component {

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
            return <div>Loading...</div>;
        } else {

            return (
                <div>
                    Data has been loaded
                    <br/>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <a href={`${item.id}`}>{item.name}</a>
                            </li>    
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default AllUsers;
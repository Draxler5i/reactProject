import React, { Component } from 'react';
import ProfileUser from '../ProfileUser/ProfileUser';

class WrapperProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            foundUser: {}
        }
    }

    componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                users: json
            })
        })
        .then(() => {
            this.setState({
                foundUser: this.findUser()
            })
        })
        ;
        
    }

    findUser() {
        const path = this.props.match.params.id;
        const auxUser = this.state.users.find( user => user.id === +path);
        return auxUser;
    }
    
    render() {
        
        const { foundUser, users } = this.state;

        return (
            <div>
                <h1>Wrapper Profile</h1>
                <ProfileUser user={this.state.foundUser}/>
            </div>
        );

    }
}

export default WrapperProfile;
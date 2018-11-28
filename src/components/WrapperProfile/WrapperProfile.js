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
        });
        // this.setState({
        //     foundUser: this.findUser()
        // })
    }

    findUser() {
        const path = this.props.match.params.id;
        //const auxUser = this.state.users.find( user => user.id === +path[1]);
        const auxUser = this.state.users.find( user => user.id === +path[1]);
        console.log(auxUser);
        console.log(path);
    }
    
    render() {
        console.log(this.state.foundUser);
        const { foundUser, users } = this.state;
        const fakeUser = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": "Kulas Light"
        }
        this.findUser();
        //{location:{pathname}}
        console.log(this.props.location.pathname);
        return (
            <div>
                <h1>Wrapper Profile</h1>
                <ProfileUser user={fakeUser}/>
            </div>
        );

    }
}

export default WrapperProfile;
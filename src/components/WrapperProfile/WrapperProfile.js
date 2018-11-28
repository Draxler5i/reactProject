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
            console.log('yyyyy', this.state.foundUser);
        })
        ;
        
    }

    findUser() {
        const path = this.props.match.params.id;
        const auxUser = this.state.users.find( user => user.id === +path);
        return auxUser;
        // console.log(auxUser);
        // console.log(path);
    }
    
    render() {
        console.log('aaaaaaaa',this.state.foundUser);
        const { foundUser, users } = this.state;
        const fakeUser = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": "Kulas Light"
            
        }
        return (
            <div>
                <h1>Wrapper Profile</h1>
                <ProfileUser user={this.state.foundUser}/>
            </div>
        );

    }
}

export default WrapperProfile;
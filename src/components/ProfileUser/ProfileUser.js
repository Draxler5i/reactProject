import React from 'react';

const ProfileUser = ({user}) => {
    if (!user) {
        return <div> El Usuario no fue encontrado</div>
    }
    const nameComp = user.company;
    console.log(nameComp);
    return (
        <div>
        <h1>{user.name}</h1>
        <h3>Username <br/> {user.username}</h3>
        <h3>Phone <br/> {user.phone}</h3>
        {/*<h3>Company <br/> {user.company}</h3>*/}
        <h3>Email <br/> {user.email}</h3>
        <h3>Website <br/> {user.website}</h3>
        </div>
    );
};

export default ProfileUser;
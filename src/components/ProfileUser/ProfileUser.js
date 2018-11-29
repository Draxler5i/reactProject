import React from 'react';

const ProfileUser = ({user}) => {
    if (!user) {
        return <div> El Usuario no fue encontrado</div>
    }
    //Aca tengo un problema, no se porque me da un error al intentar acceder al nombre de la compañia
    //console.log(user.company.name);
    const nameComp = user.company;
    console.log(nameComp);
    return (
        <div>
        <h1>{user.name}</h1>
        <h3>Username <br/> {user.username}</h3>
        <h3>Phone <br/> {user.phone}</h3>
        {<h3>Company <br/> {JSON.stringify(user.company)}</h3>}
        <h3>Email <br/> {user.email}</h3>
        <h3>Website <br/> {user.website}</h3>
        </div>
    );
};

export default ProfileUser;
import React from 'react';

const ProfileUser = ({location:{pathname}}) => {
    const print = pathname.split('/');
    console.log(print);
    const user = {
        id : 1,
        name: 'Daniel',
        username: "Bret",
        email: "Sincere@april.biz"
    }; //user de la REST API

    if (!user) {
        return <div> El Usuario no fue encontrado</div>
    }
    return (
        <h1>
            {JSON.stringify(user)}
        </h1>
    );
};

export default ProfileUser;
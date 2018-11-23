import React from 'react';

const ProfileUser = ({location:{pathname}}) => {
    var print = pathname.split('/');
    console.log(print);
    const user = {
        id : 1,
        name: 'Daniel'
    }; //user de la REST API

    if (!user) {
        return <div> El Usuario no fue encontrado</div>
    }
    return (
        <div>
            <h1>
                {JSON.stringify(user)}
            </h1>
        </div>
    );
};

export default ProfileUser;
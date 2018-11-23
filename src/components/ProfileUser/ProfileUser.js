import React from 'react';

const ProfileUser = ( { match: { params : { id } } }) => {
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
                { user.name } (id: {user.id})
            </h1>
            { user }
        </div>
    );
};

export default ProfileUser;
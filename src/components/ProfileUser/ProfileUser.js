import React from 'react';

const ProfileUser = ({user}) => {
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
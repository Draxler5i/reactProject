import React from 'react';

const ProfileUser = ({location:{pathname}}) => {
    const print = pathname.split('/');
    console.log(print);
    const user = {
        id : 1,
        name: 'Daniel'
    }; //user de la REST API

    //const users = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
                const id = parseInt(print[1]);
                const u = users.filter(user => user.id === id);
                console.log(users);
                console.log(u);
            }
        );

    // const myUser = Promise.resolve(users());
    // myUser.then((result) => (
    //     console.log(result)
    // ));
    // console.log(myUser);

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
import React from 'react';

const ProfileUser = ({location:{pathname}}) => {
    const print = pathname.split('/');
    console.log(print);
    const user = {
        id : 1,
        name: 'Daniel',
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        }
    }; //user de la REST API
    let loquesea = [];
    let foundUser = undefined;
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
                console.log(users);
                loquesea = users;
                foundUser = loquesea.find(user => user.id === +print[1]);
            }
        );
    //console.log(myUsers);
    console.log(loquesea);
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
import React from 'react';

const Userlist = (props) => {
    const { name, email, date } = props.user;
    return (
        <div>
            <h1>Name:{name}</h1>
            <h1>Email:{email}</h1>
            <h1>Date:{date}</h1>
        </div>
    );
};

export default Userlist;
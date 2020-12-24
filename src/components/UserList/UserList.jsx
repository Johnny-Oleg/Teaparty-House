import React from 'react';
// import FlipMove from 'react-flip-move';

import User from '../User/User';
import './userlist.css';

const UserList = ({ users }) => {
    console.log(users);
    return (
        <div className="user__list">
            {users.map((item, index) => <User key={item.id} {...item} />)}
        </div>
    )
}

export default UserList;
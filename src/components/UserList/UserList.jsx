import React from 'react';
import PropTypes from 'prop-types';
// import FlipMove from 'react-flip-move';

import User from '../User/User';
import './userlist.css';

const UserList = ({ users }) => {
    console.log(users);
    return (
        <ul className="user__list">
            {users.map((item, index) => <User key={item.id} {...item} />)}
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
}

export default UserList;
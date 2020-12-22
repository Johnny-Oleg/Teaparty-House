import React from 'react';

import User from '../User/User';

const UsersList = ({ users }) => {
    console.log(users);
    return (
        <div>
            {users.map((item, index) => <User key={item.id} {...item} />)}
        </div>
    )
}

export default UsersList;
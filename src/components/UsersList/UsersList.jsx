import React from 'react';

import User from '../User/User';

const UsersList = ({ users }) => {
    console.log(users);
    return (
        <div>
            {users.map((item, index) => <ul key={item.id}><User {...item} /></ul>)}
        </div>
    )
}

export default UsersList;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import FlipMove from 'react-flip-move';

import User from './User/User';
import './Userlist.css';

const UserList = () => {   
    const users = useSelector(state => state.users.users);
    const [sorted, setSorted] = useState(users);
    const [isSorted, setIsSorted] = useState(false);

    const handleSort = () => {
       const sortedUsers = [...sorted].sort((a , b) => a.name.localeCompare(b.name));
       
       setSorted(sortedUsers);
       setIsSorted(!isSorted);
    }

    const defaultOrder = users
        .map((user, index) => <User key={user.id} {...user} />);

    const sortedOrder = sorted
        .map((user, index) => <User key={user.id} {...user} />);


    return (
        <div>
            <button className="sort-btn" onClick={handleSort}>Sort users</button>
            <ul className="user__list">
                {isSorted ? sortedOrder : defaultOrder}
            </ul>
        </div>
    )
}

export default UserList;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import FlipMove from 'react-flip-move';

import User from '../User/User';
import './Userlist.css';

const UserList = ({ users, updateLikes }) => {   
    const [sorted, setSorted] = useState(users);
    const [isSorted, setIsSorted] = useState(false);

    const handleSort = () => {
       const sortedUsers = [...sorted].sort((a , b) => a.name.localeCompare(b.name));
       
       setSorted(sortedUsers);
       setIsSorted(!isSorted);
    };

    const defaultOrder = users.
        map((item, index) => <User key={item.id} {...item} updateLikes={updateLikes} />);
    const sortedOrder = sorted.
        map((item, index) => <User key={item.id} {...item} updateLikes={updateLikes} />);


    return (
        <div>
            <button className="sort-btn" onClick={handleSort}>Sort users</button>
            <ul className="user__list">
                {isSorted ? sortedOrder : defaultOrder}
            </ul>
        </div>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    updateLikes: PropTypes.func.isRequired,
}

export default UserList;
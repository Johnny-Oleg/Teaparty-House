import React from 'react';

import './usersonline.css';

const UsersOnline = () => {
    return (
        <div className="users__online">
            <h2 className="users__online-name">User - 1</h2>
            <img className="users__online-img" src="./images/user-demo.jpg" alt="user"/>
            <h2 className="users__online-name">User - 2</h2>
            <h2 className="users__online-name">User - 3</h2>
            <h2 className="users__online-name">User - 4</h2>
            <h2 className="users__online-name">User - 5</h2>
        </div>
    )
};

export default UsersOnline;
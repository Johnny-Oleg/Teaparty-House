import React from 'react';

import './usersonline.css';

const UsersOnline = () => {
    return (
        <div className="users__online">
            <h2>Users online:</h2>
            <h2 className="users__online-name">Skyer1st</h2>
            <div className="users__online-img on">
                <img className="users__online-img" src="./images/user-demo.jpg" alt="user"/>
            </div>
            <h2 className="users__online-name off">nindo</h2>
            <h2 className="users__online-name off">Feenux</h2>
            <h2 className="users__online-name off">Remain Nameless</h2>
            <h2 className="users__online-name off">saramago</h2>
        </div>
    )
};

export default UsersOnline;
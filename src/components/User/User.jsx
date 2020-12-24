import React from 'react';

import Jrpg from '../Jrpg/Jrpg';

const User = ({ name, avatar, id, top }) => {
    //console.log(id);
    return (
        <div style={{borderBottom: '10px solid #1967D2'}}>
            <li style={{color: 'black', fontSize: '24px'}}>{name}</li>
            <img 
                src={process.env.PUBLIC_URL + avatar} 
                style={{border: '3px solid black'}} 
                alt="avatar"
            />
            <ul>
                {top.map(jrpg => <Jrpg key={jrpg.id} {...jrpg} />)}
            </ul>
        </div>
    )
};

export default User;
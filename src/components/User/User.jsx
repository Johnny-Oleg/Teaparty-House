import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Jrpg from '../Jrpg/Jrpg';
import './user.css';

const User = ({ name, avatar, id, top }) => {
    //console.log(id);
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState({backgroundColor: '', clicked: false});

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(color.clicked);

        !color.clicked && setColor({backgroundColor: 'red', clicked: true});
    }
    
    useEffect(() => {
        console.log(counter, color.clicked, color.backgroundColor);
        
    }, [counter, color])
    
    // console.log(counter, color.clicked, color.backgroundColor);

    return (
        <div className="user">
            <li className="user__item">{name}</li>
            <img 
                className="user__img"
                src={process.env.PUBLIC_URL + avatar}  
                alt="avatar"
            />
            {/* <button className="user__btn" style={color} onClick={handleClick}> */}
                <FavoriteBorderIcon fontSize="small" className="user__btn" style={color} onClick={handleClick} />
            {/* </button> */}
            <span>{counter}</span>
            <ul>
                {top.map(jrpg => <Jrpg key={jrpg.id} {...jrpg} />)}
            </ul>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    top: PropTypes.arrayOf(PropTypes.object),
}

export default User;
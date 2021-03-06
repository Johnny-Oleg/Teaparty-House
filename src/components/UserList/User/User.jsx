import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import JrpgList from './JrpgList/JrpgList';
import './User.css';

const User = ({ name, avatar, id, likes, top, updateLikes }) => {
    const [counter, setCounter] = useState(likes);
    const [color, setColor] = useState({backgroundColor: '', clicked: false});
    const [visibleList, setVisible] = useState(false);

    const handleLike = () => {
        setCounter(counter + 1);
        console.log(color.clicked);

        !color.clicked && setColor({backgroundColor: 'red', clicked: true});
        updateLikes(counter + 1); //TODO
    }
    
    useEffect(() => {
        console.log(counter, color.clicked, color.backgroundColor);
        
    }, [counter, color])

    const handleClick = () => setVisible(visible => !visible);
    
    // console.log(counter, color.clicked, color.backgroundColor);

    return (
        <li className="user">
            <div className="user__item">{name}</div>
            <img 
                className="user__img"
                src={process.env.PUBLIC_URL + avatar}  
                alt="avatar"
            />
            <div className="user__top">
                <button className="btn" onClick={handleClick}><span>Top 10</span></button>
                <div className="item__list">
                    {visibleList && <JrpgList top={top} />}
                </div>
                <FavoriteBorderIcon fontSize="small" className="user__btn" style={color} onClick={handleLike} />
                <span>{counter}</span>
            </div>
        </li>
    )
}

User.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    top: PropTypes.arrayOf(PropTypes.object),
    updateLikes: PropTypes.func.isRequired,
}

export default User;
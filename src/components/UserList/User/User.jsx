import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { addUserLike } from '../../../reducers/users/usersReducer';
import JrpgList from './JrpgList/JrpgList';
import './User.css';

const User = ({ name, avatar, id, likes, top }) => {
    //? const [counter, setCounter] = useState(likes);
    const [color, setColor] = useState({color: '', clicked: false}); //TODO
    const [visibleList, setVisible] = useState(false);
    const dispatch = useDispatch();

    const handleLike = id => {
        console.log(`id: ${id}`, likes, color.clicked);

        !color.clicked && setColor({ color: 'red', clicked: true });

        dispatch(addUserLike(id));
    }
    
    useEffect(() => {
        console.log(`id: ${id}`, likes, color.clicked);
    }, [id, likes, color.clicked])

    const handleClick = () => setVisible(visible => !visible);
    
    return (
        <li className="user">
            <div className="user__item">{name}</div>
            <img 
                className="user__img"
                src={process.env.PUBLIC_URL + avatar}  
                alt="avatar"
            />
            <div className="user__top">
                <button className="btn" onClick={handleClick}>
                    <span>Top 10</span>
                </button>
                <FavoriteBorderIcon 
                    className="user__btn"
                    fontSize="small" 
                    style={color} 
                    onClick={() => handleLike(id)} 
                />
                <span>{likes}</span>
                <div className="item__list">
                    {visibleList && <JrpgList top={top} />}
                </div>
            </div>
        </li>
    )
}

User.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    top: PropTypes.arrayOf(PropTypes.object),
}

export default User;
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { addUserLike } from '../../../reducers/users/usersSlice';
import JrpgList from './JrpgList/JrpgList';
import './User.css';

const User = ({ name, avatar, id, likes, top }) => {
    //? const [counter, setCounter] = useState(likes);
    // const [color, setColor] = useState({color: '', clicked: false}); //TODO
    const [clicked, setClicked] = useState(false); //TODO
    const [visibleList, setVisible] = useState(false);
    const dispatch = useDispatch();

    const handleLike = id => {
        console.log(`id: ${id}`, likes, clicked);

        !clicked && setClicked(true);

        dispatch(addUserLike(id));
    }
    
    useEffect(() => {
        console.log(`id: ${id}`, likes);
    }, [id, likes])

    const handleClick = () => setVisible(visible => !visible);
    
    return (
        <li className="user">
            <div className="user__info nes-container is-rounded">
                <img 
                    className="user__avatar"
                    src={process.env.PUBLIC_URL + avatar}  
                    alt="avatar"
                />
                <div className="user__stats">
                    {/* <span>id: {id}</span> */}
                    <h3 className="user__name">{name}</h3>
                    <div
                        className="user__btn"
                        onClick={() => handleLike(id)} 
                    >
                        <span className="user__btn-text">Favorite</span>
                        {clicked 
                            ? <i class="nes-icon heart"></i>
                            : <i class="nes-icon is-empty heart"></i>
                        }
                        <span className="user__btn-num">{likes}</span>
                    </div>
                    <div
                        className="user__btn"
                        onClick={() => handleLike(id)} 
                    >
                        <span className="user__btn-text">Likes</span>
                        {clicked 
                            ? <i class="nes-icon like"></i>
                            : <i class="nes-icon is-empty like"></i>
                        }
                        <span className="user__btn-num">{likes}</span>
                    </div>
                    <div className="btn-wrapper">
                        <button className="nes-btn is-primary" onClick={handleClick}>
                            Top 10
                        </button>
                    </div>
                </div>
            </div>

            <div className="user-top">
                {/* <FavoriteBorderIcon 
                    className="user__btn"
                    fontSize="small" 
                    style={color} 
                    onClick={() => handleLike(id)} 
                /> */}

                {visibleList && <JrpgList top={top} />}
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
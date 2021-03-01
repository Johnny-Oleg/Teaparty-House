import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

const Form = ({ /* users, */ updateState }) => {//!
    const [newUser, setNewUser] = useState({
        name: '',
        avatar: '',
        id: 5,
        likes: 0,
        top: [
            {
                id: 1,
                description: {
                    title: '',
                    art: '',
                }

            }
        ],
    });
// console.log(updateState);
    // const [userAvatar, setUserAvatar] = useState('');

    // console.log(users);//!

    const handleChange = ({ target: { value } }) => {
        setNewUser({
            name: value.trim(), 
            avatar: null ?? '/images/avatars/default-user.png', 
            id: newUser.id++, 
            likes: 0,
            top: [
                {
                    id: 1,
                    description: {
                        title: 'Lost Odyssey',
                        art: null ?? '/images/user-demo.jpg',
                    }
                }
            ]
        });
        // setUserAvatar(value)
        // console.log(value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        // setNewUser('');
    }

    useEffect(() => {
        console.log(newUser, '->', /* usersArr */);
    }, [newUser])
    // console.log(newUser);

    return (
        <div className="form-top">
            <form onSubmit={handleSubmit}>
                <label>Add your Top 10 JRPG</label>
                <input 
                    className="form-top__input" 
                    type="text" 
                    name={newUser.name} 
                    value={newUser.name} 
                    placeholder="Enter your username"
                    onChange={handleChange}
                />
                {/* <input 
                    className="form-top__input" 
                    // type="file" 
                    type="text"
                    name={newUser.avatar} 
                    value={newUser.avatar} 
                    onChange={handleChange}
                /> */}
                <br/>
                <button className="form-top__btn btn" type="submit" onClick={() => updateState(newUser)}>Submit</button>
            </form>
        </div>
    )
}

Form.propTypes = {
    updateState: PropTypes.func.isRequired,
}

export default Form;
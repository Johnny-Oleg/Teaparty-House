import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './form.css';

const Form = ({ users }) => {
    const [newUser, setNewUser] = useState({
        name: '',
        avatar: '',
        id: 4,
        top: [
            {
                id: 0,
                description: {
                    title: '',
                    art: '',
                }

            }
        ],
    });

    // const [userAvatar, setUserAvatar] = useState('');

    console.log(users);

    const handleChange = ({ target: { value } }) => {
        setNewUser({
            name: value.trim(), 
            avatar: value ?? 'user-demo.jpg', 
            id: + 5, 
            top: [
                {
                    id: '1',
                    description: {
                        title: 'Lost Odyssey',
                        art: value ?? '/images/jrpg/user-demo.jpg',
                    }
                }
            ]
        });
        // setUserAvatar(value)
        // console.log(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        // console.log(newUser, userAvatar);
    }

    useEffect(() => {
        console.log(newUser, '->', usersArr);
    }, [newUser])
    // console.log(newUser);

    let usersArr = [...users, newUser];
    console.log(usersArr); 

    return (
        <div className="form-top">
            <label>Add your Top 10 JRPG</label>
            <form onSubmit={handleSubmit}>
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
                <button className="form-top__btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

Form.propTypes = {
    users: PropTypes.object,
}

export default Form;
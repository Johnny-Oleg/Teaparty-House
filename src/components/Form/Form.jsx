import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addNewUser } from '../../reducers/users/usersReducer';
import './Form.css';

const Form = () => {
    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({
        name: '',
        avatar: '',
        id: '',
        likes: 0,
        top: [],
    });

    const handleChange = ({ target: { value } }) => {
        setNewUser({
            name: value.trim(), 
            avatar: null ?? '/images/avatars/default-user.png', 
            id: '', 
            likes: 0,
            top: [
                {
                    id: 1,
                    description: {
                        title: 'Xenosaga Episode I: Der Wille zur Macht',
                        art: null ?? '/images/user-demo.jpg',
                    },
                },
                {
                    id: 2,
                        description: {
                            title: 'Xenosaga Episode II: Jenseits von Gut und Böse',
                            art: null ?? '/images/user-demo.jpg',
                        },
                },
                {

                    id: 3,
                    description: {
                        title: 'Xenosaga Episode III: Also Sprach Zarathustra',
                        art: null ?? '/images/user-demo.jpg',
                    },
                },
                {

                    id: 4,
                    description: {
                        title: 'Xenogears',
                        art: null ?? '/images/user-demo.jpg',
                    },
                },
                {
                    id: 5,
                    description: {
                        title: 'Xenoblade Chronicles',
                        art: null ?? '/images/user-demo.jpg',
                    },
                },
                {
                    id: 6,
                    description: {
                        title: 'Final Fantasy X',
                        art: null ?? '/images/user-demo.jpg',
                    },
                },
                {
                    id: 7,
                    description: {
                        title: 'Persona 3',
                        art: null ?? '/images/user-demo.jpg',
                    },
                },
                {
                    id: 8,
                    description: {
                        title: 'Persona 5',
                        art: null ?? '/images/user-demo.jpg',
                    },
                },
                {
                    id: 9,
                    description: {
                        title: '.hack//G.U.',
                        art: null ?? '/images/user-demo.jpg',
                    },
                },
                {
                    id: 10,
                    description: {
                        title: 'Infinite Undiscovery',
                        art: null ?? '/images/user-demo.jpg',
                    },
                }
            ]
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(addNewUser(newUser));
        setNewUser('');
    }

    useEffect(() => {
        console.log(newUser, '->');
    }, [newUser])

    return (
        <div className="form-top">
            <form onSubmit={handleSubmit}>
                <label>Add your Top 10 JRPG</label>
                <input 
                    className="form-top__input" 
                    name={newUser.name} 
                    value={newUser.name || ''} 
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter your username"
                />
                <br/>
                <input
                    className="form-top__btn btn" 
                    type="submit" 
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default Form;
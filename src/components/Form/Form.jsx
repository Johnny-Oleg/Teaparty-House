import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addNewUser } from '../../reducers/users/usersSlice';
import './Form.css';

const Form = () => {
    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({
        userId: '',
        name: '',
        avatar: '',
        likes: 0,
        top: [],
    })

    const handleChange = ({ target: { value } }) => {
        setNewUser({
            userId: '', 
            name: value.trim(), 
            avatar: null ?? '/images/avatars/default-user.png', 
            likes: 0,
            top: [
                {
                    id: 1,
                    description: {
                        title: 'Xenosaga Episode I: Der Wille zur Macht',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                },
                {
                    id: 2,
                        description: {
                            title: 'Xenosaga Episode II: Jenseits von Gut und Böse',
                            art: null ?? '/images/user-demo.jpg',
                        },
                        rating: 0
                },
                {

                    id: 3,
                    description: {
                        title: 'Xenosaga Episode III: Also Sprach Zarathustra',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                },
                {

                    id: 4,
                    description: {
                        title: 'Xenogears',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                },
                {
                    id: 5,
                    description: {
                        title: 'Xenoblade Chronicles',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                },
                {
                    id: 6,
                    description: {
                        title: 'Final Fantasy X',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                },
                {
                    id: 7,
                    description: {
                        title: 'Persona 3',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                },
                {
                    id: 8,
                    description: {
                        title: 'Persona 5',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                },
                {
                    id: 9,
                    description: {
                        title: '.hack//G.U.',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                },
                {
                    id: 10,
                    description: {
                        title: 'Infinite Undiscovery',
                        art: null ?? '/images/user-demo.jpg',
                    },
                    rating: 0
                }
            ]
        })
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
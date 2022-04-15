import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import axios from 'axios';

import { fetchUsers } from './reducers/users/usersReducer';
import Chat from './components/Chat/Chat';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import JrpgOfTheDay from './components/JrpgOfTheDay/JrpgOfTheDay';
import Player from './components/AudioPlayer/Player';
import UserList from './components/UserList/UserList';
import UsersOnline from './components/UsersOnline/UsersOnline';
import Video from './components/Video/Video';
import Widgets from './components/Widgets/Widgets';
import Footer from './components/Footer/Footer';
import data from './database/users.json';
import playlist from './database/music.json';
import testTrack from './Butterfly Kiss.mp3';

import './App.css';

// var init = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   mode: 'cors',
//   cache: 'default'
// }

//let REQUEST = new Request('http://localhost:8080/users.json', init);

const App = () => {
    // const [users, setUsers] = useState(data.users); //? []
    const [music, setMusic] = useState([]);
    const [visibleList, setVisible] = useState(false);
    const [themeDark, setThemeDark] = useState(false);

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);

    //! useEffect(() => {
    //   setUsers(users); //? data.users

    //   console.log(users, 'hook');
    //   console.log('Component did mount');

    //   return () => console.log('Component did update');
    //! }, [users]) //? data.users

    useEffect(() => {
        dispatch(fetchUsers(data.users));

        console.log('Component did mount');

        return () => console.log('Component did update');
    }, []);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme-color');

        currentTheme === 'dark' ? setThemeDark(true) : setThemeDark(false);
    }, []);

    useEffect(() => {
        setMusic(playlist.music);
    }, []); //? music

    const handleTheme = () => {
        if (themeDark) {
            localStorage.setItem('theme-color', 'light');

            setThemeDark(false);
        } else {
            localStorage.setItem('theme-color', 'dark');

            setThemeDark(true);
        }
    };

    const handleClick = () => {
        setVisible((visible) => !visible);
    };

    const updateLikes = (id, likes) => {
        // const usersCopy = [
        //     ...users.map((user) => {
        //         if (user.id === id) {
        //             user.likes = likes;
        //         }

        //         return user;
        //     }),
        // ];

        // setUsers(usersCopy);
        // console.log(id, likes, users, 'updated');
    };

    const countUsers = users.reduce(
        (total, user) => (user?.name ? (total += 1) : total), 0
    );

    console.log(users, 'users');

    if (!users) return <p>Loading, please wait...</p>;

    return (
        <div className={`app ${themeDark ? 'dark' : ''}`}>
            <Header handleTheme={handleTheme} theme={themeDark} />
            <Video />
            <div className={`container `}>
                <div className="section">
                    <JrpgOfTheDay />
                    <Player playlist={music} />
                    <img src="./images/Sire.png" alt="sir" />
                    <button className="btn" onClick={handleClick}>
                        <span>Show Users</span>
                    </button>
                    <br />
                    <span>Total users: {countUsers}</span>
                    <img src="./images/BLM.gif" alt="blm" />
                </div>
                <div className="main">
                    <UsersOnline />
                    {visibleList && (
                        <UserList users={users} updateLikes={updateLikes} />
                    )}
                    <div className="sidebar">
                        <Form />
                        <Widgets />
                        <Chat />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default App;
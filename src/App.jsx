import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from './reducers/users/usersSlice';
import { fetchMusic } from './reducers/playlist/playlistSlice';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import JrpgOfTheDay from './components/JrpgOfTheDay/JrpgOfTheDay';
import Player from './components/AudioPlayer/Player';
import UsersOnline from './components/UsersOnline/UsersOnline';
import UserList from './components/UserList/UserList';
import Chat from './components/Chat/Chat';
import Widgets from './components/Widgets/Widgets';
import Footer from './components/Footer/Footer';
import data from './database/users.json';
import playlist from './database/music.json';

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
    const [visibleList, setVisible] = useState(false);
    const [themeDark, setThemeDark] = useState(false);
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        const fecthData = () => {
            dispatch(fetchUsers(data.users));
            dispatch(fetchMusic(playlist.music));

            console.log('Component did mount', data.users, users);
        }

        fecthData();

        return () => {
            console.log('Component did update', users);
        }
    }, []);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme-color');

        currentTheme === 'dark' ? setThemeDark(true) : setThemeDark(false);
    }, []);

    const handleTheme = () => {
        if (themeDark) {
            localStorage.setItem('theme-color', 'light');

            setThemeDark(false);
        } else {
            localStorage.setItem('theme-color', 'dark');

            setThemeDark(true);
        }
    }

    const handleClick = () => {
        setVisible((visible) => !visible);
    }

    const countUsers = users.reduce((total, user) => (user?.name ? (total += 1) : total), 0);

    if (!users) return <p>Loading, please wait...</p>;

    return (
        <div className={`app ${themeDark ? 'dark' : ''}`}>
            <Header handleTheme={handleTheme} theme={themeDark} />
            <Video />
            <div className={`container `}>
                <div className="section">
                    <JrpgOfTheDay />
                    <Player />
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
                        <UserList />
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
}

export default App;
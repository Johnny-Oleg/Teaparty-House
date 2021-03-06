import React, { useState, useEffect } from 'react';
//import axios from 'axios';

import data from './database/users.json';
import playlist from './database/music.json';

import Header from './components/Header/Header';
import Video from './components/Video/Video';
import JrpgOfTheDay from './components/JrpgOfTheDay/JrpgOfTheDay';
import Player from './components/AudioPlayer/Player';
import UserList from './components/UserList/UserList';
import Form from './components/Form/Form';
import UsersOnline from './components/UsersOnline/UsersOnline';
import Widgets from './components/Widgets/Widgets';
import Chat from './components/Chat/Chat';
import './App.css';

import testTrack from './Butterfly Kiss.mp3';

// const random = arr => arr[Math.floor(Math.random() * arr.length)];

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
    const [users, setUsers] = useState(data.users); //? []
    const [music, setMusic] = useState([]);
    const [visibleList, setVisible] = useState(false);
    const [themeDark, setThemeDark] = useState(false);

    useEffect(() => {
      setUsers(users); //? data.users

      console.log(users, 'hook');
      console.log('Component did mount');

      return () => console.log('Component did update');
    }, [users]) //? data.users
    
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme-color');

        currentTheme === 'dark' ? setThemeDark(true) : setThemeDark(false);
    }, [])

    useEffect(() => {
        setMusic(playlist.music);
    }, [music])
    //useEffect(() => {
      // fetch(REQUEST)
      //   .then(res => res.json())
      //   .then(data => {
      //       //setUsers(data.users);

      //       console.log(data, 'hook');
      //       console.log('Component did mount');
      //   });

      //return () => console.log('Component did update');
    //}, [])

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
        console.log(users, 'data.users');
        setVisible(visible => !visible);
        // setUsers(data.users);
    }

    const updateState = newUser => {
        const usersCopy = [...users, newUser];

        setUsers(usersCopy);
        console.log(newUser, users, 'updated');
    }

    const updateLikes = likes => {
        const usersCopy = [...users.map(user => ({...user, likes}))];

        setUsers(usersCopy);
        console.log(likes, users, 'updated');
    }

    const countUsers = users.reduce((total, user) => user?.name ? total += 1 : total, 0);
    
    // const toggleVisibleList = () => {
    //   setVisible(visible => !visible);
    //   console.log(visibleList);
    // }

    console.log(users, 'users'); //!

    if (!users) return <p>Loading, please wait...</p>;

    return (
        <div className={`app ${themeDark ? 'dark' : ''}`}>
                <Header handleTheme={handleTheme} theme={themeDark} />
            <Video />
            <div className={`container `}>
                <div className="section">
                    <JrpgOfTheDay users={users} />
                    <Player playlist={music} />
                    <img src="./images/Sire.png" alt="sir"/>
                    <button className="btn" onClick={handleClick}><span>Show Users</span></button>
                    <br/>
                    <span>Total users: {countUsers}</span>
                    <img src="./images/BLM.gif" alt="blm"/>
                </div>
                <div className="main">
                    <UsersOnline />
                    {visibleList && <UserList users={users} updateLikes={updateLikes} />}
                    <div className="sidebar">
                        <Form /* users={users} */ updateState={updateState} />
                        <Widgets />
                        <Chat />
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default App;
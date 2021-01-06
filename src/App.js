import React, { useState, useEffect } from 'react';
//import axios from 'axios';

import data from './database/users.json';
import JrpgOfTheDay from './components/JrpgOfTheDay/JrpgOfTheDay';
import Player from './components/AudioPlayer/Player';
import UserList from './components/UserList/UserList';
import Form from './components/Form/Form';
import UsersOnline from './components/UsersOnline/UsersOnline';
import Widgets from './components/Widgets/Widgets';
import Chat from './components/Chat/Chat';
import './App.css';
// const track = './Butterfly Kiss.mp3';
import track from './Butterfly Kiss.mp3';

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
  const [users, setUsers] = useState([]);
  const [visibleList, setVisible] = useState(false);

  useEffect(() => {
    setUsers(data.users);

    console.log(users, 'hook');
    console.log('Component did mount');

    return () => console.log('Component did update');
  }, [data.users])
  
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
  
  const handleClick = () => {
      console.log(users, 'data.users');
      setVisible(visible => !visible);
      // setUsers(data.users);
  }

  const updateState = newUser => {
      setUsers([...users, newUser]);
      console.log(newUser, users, 'updated');
  }
  
  // const toggleVisibleList = () => {
  //   setVisible(visible => !visible);
  //   console.log(visibleList);
  // }

  console.log(users, 'users'); //!

  if (!users) return <p>Loading, please wait...</p>;

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src="./images/teaparty-house-logo.png" alt="logo"/>
        </div>
        <span>Teaparty House | ティーパーティーハウス</span>
        <br/>
        <span>Welcome, gentlemen! | ようこそ、殿方！</span>
      </header>
      <div className="section">
        <JrpgOfTheDay users={users} />
        <Player track={track} />
        <img src="./images/Sire.png" alt="sir"/>
        <button className="user-btn" onClick={handleClick}>Top 10</button>
      </div>
      <div className="main">
        <UsersOnline />
        {visibleList && <UserList users={users} />}
        <div className="sidebar">
          <Form /* users={users} */ updateState={updateState} />
          <Widgets />
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default App;
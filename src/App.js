import React, { useState, useEffect } from 'react';
import axios from 'axios';

import data from './database/users.json';
import UserList from './components/UsersList/UsersList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    // const handleClick = () => {
    //   console.log(data.users, 'data.users');
    //   setUsers(data.users);
    // }
  })
  
  const handleClick = () => {
      console.log(data.users, 'data.users');
      setUsers(data.users);
  }

  console.log(users, 'users');

  if (!users) return <p>Loading, please wait...</p>;

  return (
    <div className="App">
      <header>
        <span>Teaparty House | ティーパーティーハウス</span>
        <br/>
        <span>Welcome, gentlemen! | ようこそ、殿方！</span>
      </header>
      <img src="images/4d641783190d277cdc89f75702bcce96.png" alt="sir"/>
      <button onClick={handleClick}>Top 10</button>
      <UserList users={users} />
    </div>
  )
}

export default App;
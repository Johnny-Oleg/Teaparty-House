import React, { useState, useEffect } from 'react';
//import axios from 'axios';

import data from './database/users.json';
import UserList from './components/UsersList/UsersList';
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
  const [users, setUsers] = useState([]);
  const [visibleList, setVisible] = useState(false);

  useEffect(() => {
    setUsers(data.users);

    console.log(users, 'hook');
    console.log('Component did mount');

    return () => console.log('Component did update');
  }, [users])
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

  // const toggleVisibleList = () => {
  //   setVisible(visible => !visible);
  //   console.log(visibleList);
  // }

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
      {visibleList && <UserList users={users} />}
    </div>
  )
}

export default App;
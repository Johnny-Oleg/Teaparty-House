import React, { useState, useEffect } from 'react';
import axios from 'axios';

import data from './database/users.json';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetching = () => {
    console.log(data.users);
    setUsers(data.users);
  }
  
  console.log(users);

  return (
    <div className="App">
      <button onClick={fetching}></button>
      {users.map((item, index) => {
        return (
          <li key={item.id}>
            {item.name}
          </li>
        )
      })}
    </div>
  );
};

export default App;
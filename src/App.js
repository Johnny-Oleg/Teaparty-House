import './App.css';
import axios from 'axios';

import data from './database/users.json';

const App = () => {
  const fetching = () => {
    console.log(data.users);
  }

  return (
    <div className="App">
      <button onClick={fetching}></button>
      {data.users.map((item, index) => {
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
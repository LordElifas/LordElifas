import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import { Afcomponent } from './Afcomponent';
import Newcomponent from './Newcomponent';
import React, {useState} from 'react';

function App() {
  const [likes, setLikes] = useState('');
  const [value, setValue] = useState('');

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
      type="text"
      value={value}
      onChange={event =>setValue(event.target.value)}
      />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      {/* <Fcomponent />
      <Ccomponent />
      <Afcomponent />
      <Newcomponent /> */}
    </div>
  );
}

export default App;

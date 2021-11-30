import React from 'react';
import Profile from './components/Profile';
import Login from './components/Login';



import './App.css';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      
    </div>
  );
}

export default App;

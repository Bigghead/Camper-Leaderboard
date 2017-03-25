import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//=======COMPONENTS=====
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';

class App extends Component {
  render() {
    return (
      <div>
         <Header></Header>
      <Leaderboard></Leaderboard>
      </div>
     
      
    );
  }
}

export default App;

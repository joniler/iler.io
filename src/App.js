import React, { Component } from 'react';
import HomeAnimation from './components/HomeAnimation/HomeAnimation';
import Resume from './components/Resume/Resume';
import Header from './components/Header/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HomeAnimation/>
        <Resume/>
      </div>
    );
  }
}

export default App;

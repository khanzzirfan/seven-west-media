import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardLayout from './containers/CardLayout';
import backgroundImage from './assets/tile.jpg';
import logoImage from './assets/logo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CardLayout data={data}/>
      </div>
    );
  }
}

export default App;

//sample data;
const data = [
  {
    iconAlt: 'Seven West Media',
    iconImage: logoImage,
    backgroundImage: backgroundImage,
    title: 'Home and Away',
  },
  
];
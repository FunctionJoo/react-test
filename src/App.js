import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Article from './components/article1.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Article pagename="HTML" />
      </div>);
  }
}

export default App;
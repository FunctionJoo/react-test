import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Article from './components/article1.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page1 : 'HTML',
      pagelist : {
        HTML: {
          url: 'article1',
          name: 'HTML'
        },
        CSS: {
          url: 'article2',
          name: 'CSS'
        },
        JavaScript: {
          url: 'article3',
          name: 'JavaScript'
        }
      }
    }

    this.clickEvt = this.clickEvt.bind(this);
  }

  clickEvt() {
    console.log('evt!');
    this.setState( state => ({
      page1: 'asdasdasd'
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.clickEvt}>눌러보삼</button>
        <BrowserRouter>
          <Nav pagearr={this.state.pagelist} />

          <Route path="/article1" render={() => <Article data={this.state} />} />
          <Route path="/article2" component={Header} />
        </BrowserRouter>
      </div>);
  }
}

export default App;
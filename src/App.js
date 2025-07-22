import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import News from './components/news';
import Newsline from './components/newsline';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
     <Navbar/>
     <News/>
    
      </div>
    )
  }
}

export default App

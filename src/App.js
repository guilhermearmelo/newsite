import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Technologies from './components/technologies/Technologies';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;

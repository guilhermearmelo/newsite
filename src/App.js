import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Technologies from './components/technologies/Technologies';

import './App.css';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;

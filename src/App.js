import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Tecnologies from './components/tecnologies/Tecnologies';

import './App.css';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Tecnologies />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;

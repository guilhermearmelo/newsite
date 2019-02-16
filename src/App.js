import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Tecnologies from './components/tecnologies/Tecnologies';
import Portfolio from './components/portfolio/Portfolio';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Tecnologies />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;

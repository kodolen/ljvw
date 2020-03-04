import React from 'react';
import Navigation from './Navigation';
import Landings from './Landings';
import About from './About';
import Cases from './Cases';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="landings">
        <Landings></Landings>
      </div>
      <div className="inner">
        <About></About>
        <Cases></Cases>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

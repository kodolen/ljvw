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
      <Landings></Landings>
      <div className="inner">
        <About></About>
      </div>
      <div className="inner">
        <Cases></Cases>
      </div>
      <div className="inner">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div >
  );
}

export default App;

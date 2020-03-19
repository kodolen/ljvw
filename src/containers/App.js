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
      <IpTracker></IpTracker>
      <Navigation></Navigation>
      <Landings></Landings>
      <div className="inner">
        <About></About>
      </div>
      <Cases></Cases>
      <div className="inner">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div >
  );
}

export default App;

import React from 'react';
import Navigation from './Navigation';
import Landings from './Landings';
import About from './About';
import Cases from './Cases';
import Contact from './Contact';
import Footer from './Footer';

import publicIP from 'react-native-public-ip';
 
publicIP()
  .then(ip => {
    console.log(ip);
      if(ip !== '5.132.3.14'){
        window.location.replace("https://www.ljvw.nl");
      }
  })
  .catch(error => {
    console.log(error);
    // 'Unable to get IP address.'
  });

function App() {
  return (
    <div className="App">
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

import React from 'react';
import Navigation from './Navigation';
import Landings from './Landings';
import About from './About';
import Cases from './Cases';
import Contact from './Contact';
import Footer from './Footer';
import { Waypoint } from "react-waypoint";

// import publicIP from 'react-native-public-ip';

// publicIP()
//   .then(ip => {
//     console.log(ip);
//       if((ip === '5.132.3.14' || ip === '143.179.24.250')){
//         console.log("Access granted!");
//       }
//       else {
//         window.location.replace("https://www.ljvw.nl");
//       }
//   })
//   .catch(error => {
//     console.log(error);

//   });

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Landings></Landings>
      {/* <div className="content-container">
        <Waypoint topOffset="5%" onEnter={() => {
          let currentElement = document.getElementById("navigation_hamburger");
          currentElement.classList.remove('change-color');
        }

        } onLeave={() => {
          let currentElement = document.getElementById("navigation_hamburger");
          currentElement.classList.add('change-color');
        }}
        /> */}
        <div className="inner" id="js-about">
          <About></About>
        </div>
        <Cases></Cases>
        <div className="inner" id="js-contact">
          <Contact></Contact>
        </div>
      {/* </div> */}
      <Footer></Footer>
    </div >
  );
}

export default App;

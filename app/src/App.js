import React from 'react';
import FirstTitle from './FirstTitle/FirstTitle';
import AboutMe from './AboutMe/AbouteMe';
import WhatIDo from './WhatIDo/WhatIDo';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import HireMe from './HireMe/HireMe';
import Footer from './Footer/Footer';
import AppBar from './AppBar/AppBar';

function App() {
  return (
    <div>
      <AppBar/>
      <FirstTitle/>
      <AboutMe/>
      <WhatIDo/>
      <Education/>
      <Projects/>
      <HireMe/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react'
import Storynew from './components/Storynew';
import Navbarnew from './components/Navbarnew';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <Navbarnew />
      <Intro />
      <Storynew />
      <Experience />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;

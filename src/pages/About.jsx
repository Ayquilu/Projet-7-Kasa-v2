import React from 'react';
import './About.scss';
import AboutBanner from "../composant/About-Banner.jsx";
import DropdownPanel from '../composant/dropdown-panel.jsx';

function About() {
  return (
    <>
    <div className='page'>
      <AboutBanner />
      <DropdownPanel />

    </div>
    
   </>
  );
}

export default About;
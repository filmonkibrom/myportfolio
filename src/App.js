import React from 'react';
/*yarn add react-router-dom should be installed first*/
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/header.component';
import About from './components/About/about.component.jsx';
import Experience from './components/Experience/Experience.component.jsx';
import Projects from './components/projects/projects.componet';
import Skills from './components/skills/skills.component';
import ContactForm  from './components/Contact/Contact.js';
import 'semantic-ui-css/semantic.min.css'


import './App.css';


function App() {
  return (
    <div >
      <Header />
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <ContactForm/> 
    </div>
  );
};

export default App;
 

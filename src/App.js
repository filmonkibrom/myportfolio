import React from 'react';
/*yarn add react-router-dom should be installed first*/
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/header.component';
import About from './components/About/about.component.jsx';
import Experience from './components/Experience/experience.componenet';
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
      <Skills/>
      <ContactForm/>
      {/*<Router>
          <Header />
                  <Switch>
                      <Route exact path="/" component={About} />
                      <Route exact path="/experiance" component={Experience} />
                      <Route path="/contact" component={ContactForm} /> 
                      <Route path="/skills" component={Skill} />  
                  </Switch>
      </Router>*/}  
    </div>
  );
};

export default App;
 

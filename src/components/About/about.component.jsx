import React from 'react';
import { Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import myPhoto from "../../assets/profile/filmoln.jpg";
import './about.css';

const About = () => {
  return (
    <div className="wrapper" id="about">
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          
        }}
      >
        <Element name="about"> About Me </Element>
      </Typography>
        <div className="name">
          <img src={myPhoto} alt="profile_photo" className="img" />
          <h1>Filmon </h1>
          <div className="subtitle">
            {/*<h3>I am a Full stack web developer. I give life to designs</h3>*/}
            <h3>I am a Front end web developer</h3>
            <p>A design-minded front-end web developer focused on building beautiful interfaces with quality and elegance! <br/>
            Experienced in Javascript and ReactJS</p>
          </div>
        </div>
    </div>
    );
  };
  

export default About;
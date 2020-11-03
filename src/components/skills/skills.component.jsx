import React from "react";
import { Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import skillList from "./skillList.js";

import './skills.styles.scss';

const Skills= ()=> {
  return (
    <div className='skill' id='skills'>
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
        <Element name="skill">Skills</Element>
      </Typography>


      <div className="skill-container">
        {skillList.map(({img, id}) => (
          <img style={{
            width:"20%",
            height: "120px"
            
          }}src={img} alt={''}key={id}/>
         
        ))}
      </div>


    </div>
  );
}

export default Skills;
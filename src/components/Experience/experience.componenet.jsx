import React from 'react';
import photo1 from '../../assets/experience/freelance-web-developer.jpg';
import photo2 from '../../assets/experience/HVAC-engineer.jpeg';
import photo3 from '../../assets/experience/Mechanical-Engineering.jpg';
import photo4 from '../../assets/experience/Type of Water Distribution Network.jpg';
import { Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import { ExperienceContainer } from './experience.styles';
//import { Grid } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

const Experience = () => {
  return (
  <ExperienceContainer>  
  
    <div className='experience' id='experience'>

<Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          marginBottom: "3rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          
        }}
      >
        <Element name="experience">Experience</Element>
      </Typography>
     
      
       {/*<Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <img src={photo1} alt='' width="350" height="300"/>
      </Grid.Column>
      <Grid.Column width={8}>
      <img src={photo2} alt='' width="350" height="300"/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
      <img src={photo3} alt='' width="350" height="300"/>
      </Grid.Column>
      <Grid.Column width={8}>
        <img src={photo4} alt='' width="350" height="300"/>
      </Grid.Column>
    </Grid.Row>
  </Grid>*/}

  <Card.Group className="exp-photos" itemsPerRow={4}>
    <Card raised image={photo1}  width="350" height="300"/>
    <Card raised image={photo2} width="350" height="300"/>
    <Card raised image={photo3} width="350" height="300"/>
    <Card raised image={photo4} width="350" height="300"/>
  </Card.Group>
  </div>
     </ExperienceContainer>
        
    
    );
  };
  

export default Experience;
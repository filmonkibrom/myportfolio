import React from 'react';
import Card from '@material-ui/core/Card';
import { Element } from "react-scroll";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {GitHub,Launch } from '@material-ui/icons';

import { useStyles } from "./projects.styles.js";
import CrwnClothing from "../../assets/projects/CrwnClothing.png";
import QuoteGenerator from "../../assets/projects/QuoteGenerator.png";
import OceanGate from "../../assets/projects/OceanGate.png";
export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
<div id="projects"
         style={{
          display:"flex-box",
          margin:"10px",
          paddingTop:"10vh"
        }}
        >
    <React.Fragment>
        <Typography
            variant="h2"
            display="block"
            align="center"
            id="projects"
            style={{
                margin: "1rem",
                fontSize: "1.6rem",
                textTransform: "uppercase",
                marginTop:"0px",
                marginBottom:"0px",
                overflow:"hidden"
            }}
      >
        <Element name="projects">Projects</Element>
      </Typography>
    <div className={classes.rapper}>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={CrwnClothing}
        title="Crown-clothing"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive e-commerce website is a react-app application designed with styled-component, redux and firebase.
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="go to website" href="https://crwn-fili.herokuapp.com/">
          <Launch/>
        </IconButton>
        <IconButton aria-label="go to github repository" href="https://github.com/filmonkibrom/crwn-clothing">
          <GitHub />
        </IconButton>
      </CardActions>
    </Card>
    
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={QuoteGenerator}
        title="Quote-Generator"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This application is a Quote Generator, which generates quotes form different people who sayes about and it fetches from API onClick the button.
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="go to website" href="https://generate-quote.herokuapp.com/">
          <Launch/>
        </IconButton>
        <IconButton aria-label=" go to github repository" href="https://github.com/filmonkibrom/quote-generator">
          <GitHub />
        </IconButton>
      </CardActions>
    </Card>

        <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={OceanGate}
        title="Crwn-clothing"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        OceanGate project is a plane Html5 and CSS3 project of an electronics shop. It was my first semister project in my first year study. 
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="go to website">
          <Launch/>
        </IconButton>
        <IconButton aria-label="go to the github repository" href="">
          <GitHub />
        </IconButton>
      </CardActions>
    </Card>
    </div>
    </React.Fragment>
    </div>
  );
};

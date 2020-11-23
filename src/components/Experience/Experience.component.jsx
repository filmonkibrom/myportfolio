import React from "react";
import { Element } from "react-scroll";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { exp } from "./Experience.js";
import ExperienceCard from "../ExperienceCard/ExperienceCard.component.jsx";

import { useStyles } from "./Experience.styles";
// import zIndex from "@material-ui/core/styles/zIndex";

const Experience=()=> {
  const classes = useStyles();

  return (
    <div id="experience"
          style={{
            display:"flex-box",
            marginTop:"10px",
            padding:"10vh",
          }}
          >
    <React.Fragment>
      <CssBaseline />
      <Typography
        className={classes.title}
        variant="h2"
        display="block"
        align="center"
        id="experience"
             >
        <Element name="experience">Work Experience</Element>
      </Typography>

      <div className={classes.expContainer}>
        {exp.map(e => {
          return (
            <ExperienceCard
              title={e.title}
              desc={e.desc}
              date={e.date}
              img={e.img}
              key={e.title + "key"}
            />
          );
        })}
      </div>
    </React.Fragment>
    </div>
  );
};

export default Experience;

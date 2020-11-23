import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles({
 
  expContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-around",
    // position:"relative",
    // zIndex:"-1"
  },
  title: {
    fontSize: "1.6rem",
    textTransform: "uppercase", 
    margin:"100px 0px 30px",
  }
});

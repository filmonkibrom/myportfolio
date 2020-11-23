import React from "react";
import { Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Contact.css";

const ContactForm=()=> {
  
  return (
    <div id="contact">
      <Typography
        variant="h2"
        display="block"
        align="center"
        id="contact-us"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          
        }}
      >
        <Element name="contact">Contact Me</Element>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          paddingBottom:"50px"
        }}
      >
        
        <form
          className="contact-form"
          id="contact-form"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px",
            backgroundcolor:"rgba(250,250,250)",
            boxshadow: "0 10px 10px 10px rgba(0, 0, 0, 0.2)",
            borderradius:"",
          }}
        >
        Phone: (314) 239 3150<br/>
        Email: kibromfilmon@gmail.com
          <TextField
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
            id="name"
            placeholder="Enter your name"
          />
          <TextField
            label="Email"
            type="email"
            id="email"
            margin="normal"
            variant="outlined"
            placeholder="Enter your email"
          />
          <TextField
            label="Message"
            id="message"
            multiline
            margin="normal"
            variant="outlined"
            placeholder="Enter your message"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              type="submit"
              style={{ width: "50%", marginTop: "15px" }}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default ContactForm;
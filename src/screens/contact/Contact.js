import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "./Styles";

const ContactForm = () => {
  const form = useRef();
  const [show, setShow] = useState(true);
  const classes = useStyles();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShow(false);
  };

  return (
    <div style={{ backgroundColor: "rgba(1,10,21,255)" }}>
      <Container className={classes.container} component="main" id="contact">
        <CssBaseline />
        <Box className={classes.box}>
          <Typography
            
            className={classes.mainTitle}
            component="h1"
            variant="h1"
            align="left"
          >
            Feel free to <span style={{ color: "#e67b54" }}>contact me</span>
          </Typography>
          {show ? (
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputLabelProps={{
                      style: { color: "rgba(180, 206, 241, 255)" },
                    }}
                    name="from_name"
                    required
                    fullWidth
                    id="from_name"
                    label="Name"
                    type="text"
                    color="primary"
                    inputProps={{
                      style: { color: "rgba(180, 206, 241, 255)" },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    InputLabelProps={{
                      style: { color: "rgba(180, 206, 241, 255)" },
                    }}
                    required
                    fullWidth
                    label="Adres E-mail"
                    type="text"
                    name="from_email"
                    id="from_email"
                    inputProps={{
                      style: { color: "rgba(180, 206, 241, 255)" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    InputLabelProps={{
                      style: { color: "rgba(180, 206, 241, 255)" },
                    }}
                    multiline={true}
                    minRows={8}
                    required
                    fullWidth
                    name="message"
                    label="New message"
                    type="message"
                    id="message"
                    inputProps={{
                      style: { color: "rgba(180, 206, 241, 255)" },
                    }}
                  />
                </Grid>

                <Grid item xs={12}></Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                value="Send"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "rgba(180, 206, 241, 255)" }}
              >
                Send
              </Button>
            </Box>
          ) : (
            <Box style={{ padding: "50px" }}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontFamily: "Roboto",
                  fontWeight: 800,
                }}
              >
                Thanks for message! Someone will contact you as soon as posible!
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default ContactForm;

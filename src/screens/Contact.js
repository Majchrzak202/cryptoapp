import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const ContactForm = () => {
  const form = useRef();
  const [show, setShow] = useState(true);

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
      setShow(false)
  };

  return (
    <Container
      style={{
        marginBottom: "50px",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
      component="main"
      maxWidth="md"
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{ fontSize: "30px", fontFamily: "Roboto", fontWeight: 800 }}
          component="h1"
          variant="h1"
          align="center"
        >
          SEND SOME INFO
        </Typography>
        <Typography
          style={{ fontSize: "16px", fontFamily: "Roboto" }}
          fontWeight={800}
          variant="h4"
          align="center"
        >
          This is a educational project of Crypto App with Portfolio feature.
          feel free to contact me!
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
                  name="from_name"
                  required
                  fullWidth
                  id="from_name"
                  label="Name"
                  type="text"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Adres E-mail"
                  type="text"
                  name="from_email"
                  id="from_email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline={true}
                  minRows={8}
                  required
                  fullWidth
                  name="message"
                  label="New message"
                  type="message"
                  id="message"
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
  );
};

export default ContactForm;

import React, { useState } from "react";
import { useAuth } from "../../context/UserAuthContextProvider";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Container,
  Grid,
  TextField,
  CssBaseline,
  Box,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { SignUp } = useAuth();
  const navigate = useNavigate();
  const classes = useStyles();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await SignUp(email, password);
      navigate("/cryptos");
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };
  return (
    <Container
      style={{ minHeight: "100vh", padding: "30px" }}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8,
        }}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          style={{
            backgroundColor: "rgba(180, 206, 241, 255)",
            color: "#e67b54",
          }}
          sx={{ m: 1, bgcolor: "secondary.main" }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="center">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={submitHandler}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                InputLabelProps={{
                  style: { color: "rgba(180, 206, 241, 255)" },
                }}
                type="text"
                color="primary"
                inputProps={{
                  style: { color: "rgba(180, 206, 241, 255)" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                InputLabelProps={{
                  style: { color: "rgba(180, 206, 241, 255)" },
                }}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
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
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
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
            sx={{ mt: 3, mb: 2 }}
            style={{ backgroundColor: "rgba(180, 206, 241, 255)" }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(180, 206, 241, 255)",
                }}
                to="/login"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;

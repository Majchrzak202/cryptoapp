import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../context/UserAuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
const theme = createTheme();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { Login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await Login(email, password);
      navigate("/cryptos");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{ minHeight: "100vh", padding: "30px" }}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {error && (
              <Typography
                style={{
                  color: "black",
                  backgroundColor: "#FF6347",
                  borderRadius: "3px",
                  paddingLeft: "3px",
                }}
              >
                {error}
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: "rgba(180, 206, 241, 255)" },
              }}
              inputProps={{
                style: { color: "rgba(180, 206, 241, 255)" },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                style: { color: "rgba(180, 206, 241, 255)" },
              }}
              inputProps={{
                style: { color: "rgba(180, 206, 241, 255)" },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  style={{ color: "rgba(180, 206, 241, 255)" }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "rgba(180, 206, 241, 255)",
                color: "black",
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "rgba(180, 206, 241, 255)",
                  }}
                  to="/forgot"
                >
                  {"Forgot password?"}
                </Link>
              </Grid>
              <Grid item>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "rgba(180, 206, 241, 255)",
                  }}
                  to="/signup"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

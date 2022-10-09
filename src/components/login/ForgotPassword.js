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

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const { ResetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await ResetPassword(email);
      setShow(false);
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
            Password Reset
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
                  fontFamily: "Roboto",
                }}
              >
                {error}
              </Typography>
            )}
            {show ? (
              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{
                    style: { color: "rgba(180, 206, 241, 255)" },
                  }}
                  inputProps={{
                    style: {
                      color: "rgba(180, 206, 241, 255)",
                      borderColor: "rgba(180, 206, 241, 255) !important",
                    },
                  }}
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
                  Reset Password
                </Button>
              </div>
            ) : (
              <Typography style={{ fontFamily: "Roboto" }}>
                Please check your e-mail to reset password!
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;

import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useAuth } from "../../context/UserAuthContextProvider";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const { ResetPassword } = useAuth();

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
  );
};

export default ForgotPassword;

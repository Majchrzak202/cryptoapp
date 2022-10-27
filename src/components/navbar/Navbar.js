import React from "react";
import useStyles from "./Styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Tooltip,
  Menu,
  MenuItem,
  CardMedia,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import cryptoLogo from "./../../assets/cryptoLogo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/UserAuthContextProvider";
import { useTheme } from "../../context/ThemeContext";
import { Link as SmoothLink } from "react-scroll";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const { Logout, user } = useAuth();
  const { theme } = useTheme();
  const classes = useStyles();
  const location = useLocation();
  const currentPath = location.pathname;
  let pages = [];

  if (currentPath === "/") {
    pages = [
      <SmoothLink
        className={classes.link}
        to="mainMenu"
        spy={true}
        smooth={true}
        offset={-20}
        duration={500}
      >
        Main Menu
      </SmoothLink>,
      <SmoothLink
        to="about"
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        className={classes.link}
      >
        About
      </SmoothLink>,
      <SmoothLink
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={classes.link}
      >
        Contact
      </SmoothLink>,
    ];
  } else {
    pages = [
      <Link className={classes.link} to="/">
        Main Menu
      </Link>,
      <Link className={classes.link} to="/about">
        About
      </Link>,
      <Link className={classes.link} to="/contact">
        Contact
      </Link>,
    ];
  }

  const settings = [
    <Link style={{ textDecoration: "none" }} to="/portfolio">
      Portfolio
    </Link>,
    <Link style={{ textDecoration: "none" }} to="/settings">
      Settings
    </Link>,
    <Link style={{ textDecoration: "none" }} to="/" onClick={Logout}>
      Logout
    </Link>,
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={classes.appbar}>
      <AppBar id={theme} position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <CardMedia sx={{ display: { xs: "none", md: "flex" } }}>
                <img
                  alt="cryptoLogo"
                  style={{ width: "140px", height: "60px" }}
                  src={cryptoLogo}
                />
              </CardMedia>
            </Link>

            <Box
              className={classes.mobileMenu}
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link to="/">
              <CardMedia sx={{ display: { xs: "flex", md: "none" } }}>
                <img
                  alt="cryptoLogo"
                  style={{ width: "100px", height: "40px" }}
                  src={cryptoLogo}
                />
              </CardMedia>
            </Link>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Roboto",
                fontWeight: 700,

                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={Math.random()}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <SettingsIcon
                      fontSize="large"
                      style={{ color: "rgba(180, 206, 241, 255)" }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={Math.random()} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box style={{ display: "flex" }}>
                <Link style={{ textDecoration: "none" }} to="/login">
                  <Button>
                    <Typography
                      style={{
                        color: "rgba(180, 206, 241, 255)",
                        fontFamily: "roboto",
                      }}
                    >
                      Login
                    </Typography>
                  </Button>
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;

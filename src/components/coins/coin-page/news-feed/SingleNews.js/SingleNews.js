import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import useStyles from "./Styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const SingleNews = ({ title, imgURL, link }) => {
  const classes = useStyles();
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      href={link}
      className={classes.link}
    >
      <Box className={classes.main}>
        <Typography style={{ fontSize: 14 }} textalign="left">
          {title}
        </Typography>
        <img
          classname={classes.img}
          src={imgURL}
          alt="news"
          style={{ width: "90%", height: "auto" }}
        />
        <Typography style={{ display: "flex", fontSize: 13 }}>
          Read more <ArrowRightIcon />
        </Typography>
      </Box>
    </Link>
  );
};

export default SingleNews;

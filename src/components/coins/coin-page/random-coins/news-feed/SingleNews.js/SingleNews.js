import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const SingleNews = ({ title, imgURL, link }) => {
  return (
    <Link
      href={link}
      style={{ textDecoration: "none", cursor: "pointer", color: "black" }}
    >
      <Box
        style={{
          padding: 5,
          backgroundColor: "#F7e2c7",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Typography style={{ fontSize: 14 }} textalign="left">
          {title}
        </Typography>
        <img
          style={{ width: "90%", height: "auto", borderRadius: 6 }}
          src={imgURL}
          alt="news"
        />
        <Typography style={{ display: "flex", fontSize: 13 }}>
          Read more <ArrowRightIcon />
        </Typography>
      </Box>
    </Link>
  );
};

export default SingleNews;

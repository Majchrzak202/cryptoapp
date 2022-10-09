import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import useStyles from "./Styles";
import SingleNews from "./SingleNews.js/SingleNews";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        "https://api.coinstats.app/public/v1/news/latest?skip=0&limit=3"
      );
      const data = await response.json();
      setNews(data.news);
    };
    fetchNews();
  }, []);

  if (news.length === 0) {
    return null;
  }

  return (
    <Box sx={{ display: {}}} className={classes.newsBox}>
      {news.map((oneNews) => (
        <SingleNews
          key={oneNews.title}
          title={oneNews.title}
          imgURL={oneNews.imgURL}
          link={oneNews.link}
        />
      ))}
    </Box>
  );
};

export default NewsFeed;

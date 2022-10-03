import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

const CustomRoutes = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);

    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  TopBarProgress.config({
    barColors: {
      0: "#deedff",
      0.3: "#deedff",
      0.6: "#839bb8",
      1: "#e67b54",
    },
    shadowBlur: 5,
    barThickness: 3
  });

  return (
    <>
      {progress && <TopBarProgress />}
      <Routes>{children}</Routes>
    </>
  );
};

export default CustomRoutes;

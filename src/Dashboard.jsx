import React from "react";
import Intro from "./pages/Components-Folder/Intro";
import Expertise from "./pages/Components-Folder/Expertise";
import { Box } from "@mui/material";
import Solution from "./pages/Components-Folder/Solutions";
import Technologies from "./pages/Components-Folder/Technologies";
import Aboutus from "./pages/Components-Folder/Aboutus";
import OurProcess from "./pages/Components-Folder/OurProcess";
import LatestArticles from "./pages/Components-Folder/LatestArticles";
import Testimonials from "./pages/Components-Folder/Testimonials";
import Contactus from "./pages/Components-Folder/Contactus";
import Footer from "./pages/Components-Folder/Footer";
import "./index.css";
import Header from "./pages/Components-Folder/Header";
import ScrollToTopButton from "./pages/Components-Folder/ScrollToBottom";

function Dashboard() {
  return (
    <>
      <Header />
      <Box
        sx={{
          background: (theme) => theme.palette.background.gradient,
          backgroundSize: '100% 200vh',
        }}
      >
        <Box id="intro">
          <Intro />
        </Box>
        <Box id="expertise">
          <Expertise />
        </Box>
        <Box id="solution">
          <Solution />
        </Box>
        <div id="technologies">
          <Technologies />
        </div>
        <Box id="aboutus">
          <Aboutus />
        </Box>
        <Box id="ourprocess">
          <OurProcess />
        </Box>
        {/*<div id="blog">
          <LatestArticles />
        </div>*/}
        <Box id="testimonials">
          <Testimonials />
        </Box>
        <Box id="case-study">
          <Contactus />
        </Box>
      </Box>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Dashboard;
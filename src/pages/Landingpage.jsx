import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import theme from "../theme";
import Navbar from "../components/landingcomponent/Navbar";
import Herosection from "../components/landingcomponent/Herosection";
import Searchsection from "../components/landingcomponent/Searchsection";
import Everythingneed from "../components/landingcomponent/Everythingneed";
import Statssection from "../components/landingcomponent/Statssection";


function Landingpage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Herosection/>
      <Searchsection/>
      <Everythingneed/>
      <Statssection/>
    </ThemeProvider>
  );
}

export default Landingpage;
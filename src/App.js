import React from "react";
import {Button} from '@material-ui/core'; //importing material ui component
import {TextField} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GuessView from "./components/GuessView";
import JoinView from "./components/JoinView";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";




function App() {
  const mode = 1
  const colors = ["#cf1578", "#e8d21d", "#039fbe", "#b20238"]
  const theme = createTheme({
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      //fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
    },
  });

  const displayView = () => {
    switch (mode) {
      case 1:
        return <GuessView colors={colors}/>
      case 2:
        return <JoinView/>
    }
  }

  return (
    <div className="App">
      <NavBar/>
      <ThemeProvider theme={theme}>
        <Typography>Hello World</Typography>
        {displayView()}
      </ThemeProvider>
      <Typography>Hellooo</Typography>

    </div>
  );
}

export default App;

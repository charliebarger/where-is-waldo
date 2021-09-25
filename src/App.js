import React from "react";
import GolbalStyles from "./styles/globalStyles";
import Header from "./Header";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GameBody from "./GameBody";
import db from "./firebase.config";

import { collection, addDoc } from "firebase/firestore";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GolbalStyles />
      <Header />
      <GameBody />
    </ThemeProvider>
  );
}

export default App;

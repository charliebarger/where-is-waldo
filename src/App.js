import React from "react";
import GolbalStyles from "./styles/globalStyles";
import Header from "./header";
import GameImage from "./GameImage";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import db from "./firebase.config";

import { collection, addDoc } from "firebase/firestore";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GolbalStyles />
      <Header />
      <GameImage />
    </ThemeProvider>
  );
}

export default App;

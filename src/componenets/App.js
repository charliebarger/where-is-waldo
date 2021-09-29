import React, { useState } from "react";
import GolbalStyles from "../styles/globalStyles";
import Header from "./header/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GameBody from "../GameBody";
import db from "../firebase.config";

import { collection, addDoc } from "firebase/firestore";

function App() {
  const [slide, setSlide] = useState(1);
  return (
    <ThemeProvider theme={theme}>
      <GolbalStyles />
      <Header slide={slide} />
      <GameBody slide={slide} setSlide={setSlide} />
    </ThemeProvider>
  );
}

export default App;

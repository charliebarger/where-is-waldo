import React, { useState } from "react";
import GolbalStyles from "../styles/globalStyles";
import Header from "./header/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GameBody from "./body/GameBody";
import { HashRouter as Router } from "react-router-dom";
import db from "./firebase.config";

import { collection, addDoc, doc, query, getDocs } from "firebase/firestore";

function App() {
  const getParasites = async () => {
    let parasites = [];
    const querySnapshot = await getDocs(collection(db, "parasites"));
    querySnapshot.forEach((doc) => {
      parasites.push(doc.data());
    });
    console.log(parasites);
  };
  getParasites();
  const [slide, setSlide] = useState(3);
  const [closed, setClosed] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GolbalStyles />
        <Header slide={slide} closed={closed} setClosed={setClosed} />
        <GameBody slide={slide} setSlide={setSlide} setClosed={setClosed} />
      </ThemeProvider>
    </Router>
  );
}

export default App;

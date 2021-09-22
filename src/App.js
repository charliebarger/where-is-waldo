import React from "react";
import GolbalStyles from "./styles/globalStyles";
import Header from "./header";
import db from "./firebase.config";
import { collection, addDoc } from "firebase/firestore";

function App() {
  return (
    <>
      <GolbalStyles />
      <Header />
    </>
  );
}

export default App;

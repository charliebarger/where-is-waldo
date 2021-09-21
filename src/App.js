import React from "react";
import GolbalStyles from "./styles/globalStyles";
import db from "./firebase.config";
import { collection, addDoc } from "firebase/firestore";

function App() {
  return (
    <>
      <GolbalStyles />
      <div>Rick and Morty</div>
    </>
  );
}

export default App;

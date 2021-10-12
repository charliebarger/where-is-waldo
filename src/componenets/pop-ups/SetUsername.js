import React, { useState } from "react";
import styled from "styled-components";
const Filter = require("bad-words");
const NameInput = styled.input`
  outline: none;
  display: flex;
  margin: auto;
  background: none;
  border: 2px solid white;
  padding: 10px 15px;
  border-radius: 5px;
  background: #00000070;
  font-size: 18px;
  margin-top: 20px;
  &::placeholder {
    color: white;
  }
  color: white;
`;

const SetUsername = ({ formId, setValidity }) => {
  const [formValue, setFormValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setFormValue("");
  };

  const updateForm = (word) => {
    const filter = new Filter({ placeHolder: "No Naught Words" });
    filter.isProfane(word)
      ? setFormValue("No Naughty Words")
      : setFormValue(word);
  };

  return (
    <form onSubmit={submitForm} id={formId}>
      <NameInput
        value={formValue}
        onChange={(e) => {
          updateForm(e.target.value);
          setValidity(e.target.validity.valid);
        }}
        placeholder="Username"
        required
      />
    </form>
  );
};

export default SetUsername;

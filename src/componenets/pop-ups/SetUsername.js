import React, { useState } from "react";
import styled from "styled-components";

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

const SetUsername = ({ formId }) => {
  const [formValue, setFormValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setFormValue("");
  };

  return (
    <form onSubmit={submitForm} id={formId}>
      <NameInput
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="Username"
      />
    </form>
  );
};

export default SetUsername;

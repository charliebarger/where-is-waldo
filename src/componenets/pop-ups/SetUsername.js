import React from "react";
import styled from "styled-components";
const NameInput = styled.input`
  font-family: "Gemunu Libre", sans-serif;
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

const whyIsInvalid = (e) => {
  if (/\s/.test(e.target.value)) {
    e.target.setCustomValidity("No Spaces Bruh");
  } else {
    e.target.setCustomValidity("Fill Out the Form Bruh ");
  }
};

const SetUsername = ({ setValidity, formValue, setFormValue, formId }) => {
  return (
    <form id={formId}>
      <NameInput
        maxLength={15}
        pattern={"[^' ']+"}
        onInvalid={whyIsInvalid}
        value={formValue}
        onChange={(e) => {
          e.target.setCustomValidity("");
          setFormValue(e.target.value);
          setValidity(e.target.validity.valid);
        }}
        placeholder="Username"
        required
      />
    </form>
  );
};

export default SetUsername;

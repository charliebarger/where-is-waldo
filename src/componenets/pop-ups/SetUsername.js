import React from "react";
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

const SetUsername = ({ setValidity, formValue, setFormValue, formId }) => {
  const updateForm = (word) => {
    const filter = new Filter();
    return filter.isProfane(word);
    // {
    //   e.target.validity.valid = false;
    //   e.target.setCustomValidity("No Naughty Words Bruh");
    // } else {
    //   setFormValue(e.target.value);
    // }
  };

  return (
    <form id={formId}>
      <NameInput
        maxLength={15}
        pattern={"[^' ']+"}
        onInvalid={(e) => {
          if (/\s/.test(e.target.value)) {
            e.target.setCustomValidity("No Spaces Bruh");
          } else {
            e.target.setCustomValidity("No Naughty Words Bruh");
          }
        }}
        value={formValue}
        onChange={(e) => {
          updateForm(e.target.value)
            ? e.target.setCustomValidity("No Bad Words Bruh")
            : e.target.setCustomValidity("");
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

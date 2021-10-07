import React, { useState } from "react";
import styled from "styled-components";
import StyledPopUp from "./Slides";
import rick1 from "../../assets/rick1.png";
import Button from "../Button";
import Timer from "../header/Timer";
import SetUsername from "./SetUsername";

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: 2 / 1 / 3 / 2;
  height: 100%;
  width: 100%;
`;

const DialogWrapper = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PopUpHead = styled.h1`
  margin: 0px auto;
  color: white;
  font-size: 40px;
  position: relative;
  top: 2px;
`;

const ButtonPosition = styled.div`
  grid-area: 3/2;
  display: flex;
`;

const NameSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-around;
`;

const InputWrapper = styled.div``;
const NameSectionSpan = styled.span`
  font-size: 27px;
  text-align: center;
  display: block;
  margin-bottom: 10px;
`;
const Slide3 = ({ changeSlide }) => {
  const formId = "usernameForm";
  const [validity, setValidity] = useState(false);
  console.log(validity);
  return (
    <StyledPopUp place={3}>
      <ImageWrapper>
        <img alt="rick" src={rick1}></img>
      </ImageWrapper>
      <DialogWrapper>
        <PopUpHead>Wubba Lubba Dub Dub!</PopUpHead>
        <Timer finished>00:01:24</Timer>
      </DialogWrapper>
      <NameSection>
        <NameSectionSpan>
          Let's Get You on the Global Leaderboard!
        </NameSectionSpan>
        <InputWrapper required>
          <NameSectionSpan>What's your name Bruh?</NameSectionSpan>
          <SetUsername setValidity={setValidity} formId={formId} />
        </InputWrapper>
      </NameSection>
      <ButtonPosition>
        <Button
          type="submit"
          form={formId}
          linkTo="/high-scores"
          className="submit"
          valid={validity}
        >
          Submit
        </Button>
      </ButtonPosition>
    </StyledPopUp>
  );
};

export default Slide3;

import React from "react";
import styled from "styled-components";
import StyledPopUp from "./Slides";
import rick1 from "../../assets/rick1.png";
import Button from "../Button";
import Timer from "../header/Timer";

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

const SubText = styled.div`
  border: white solid 3px;
  font-size: 34px;
  margin: 10px;
  animation: hi 1s ease-in forwards;
  animation-delay: 1.5s;
  opacity: 0;
  @keyframes hi {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }
`;

const FinalTime = styled.div`
  box-shadow: 2px 2px 5px black;
  padding: 15px;
  display: flex;
  align-items: center;
  background: black;
  border-radius: 10px;
  border: white solid 2px;
  * {
    font-size: 22px;
    color: white;
  }
`;

const TimeLabel = styled.span`
  position: relative;
  top: 2px;
  font-size: 28px;
  color: white;
  margin-right: 5px;
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

const InputWrapper = styled.div``;
const NameSectionSpan = styled.span`
  font-size: 27px;
  text-align: center;
  display: block;
  margin-bottom: 10px;
`;
const Slide3 = ({ changeSlide }) => {
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

        <InputWrapper>
          <NameSectionSpan>What's your name Bruh?</NameSectionSpan>
          <NameInput placeholder="Username" />
        </InputWrapper>
      </NameSection>
      <ButtonPosition>
        <Button handleEvent={null}>Submit</Button>
      </ButtonPosition>
    </StyledPopUp>
  );
};

export default Slide3;

import React from "react";
import styled from "styled-components";
import StyledPopUp from "./StyledPopUp";
import rick1 from "../../assets/rick1.png";
import Button from "../Button";

//Start Styles

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: 1 / 1 / 3 / 2;
  height: 100%;
  width: 100%;
`;

const DialogWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  margin: 10px;
`;

const PopUpHead = styled.h1`
  overflow: hidden;
  color: white;
  font-size: 37px;
  white-space: nowrap;
  animation: typing 1s steps(40, end);
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const SubText = styled.p`
  overflow: hidden;
  font-size: 28px;
  text-align: center;
  animation: hi 0.5s ease-in forwards;
  animation-delay: 1s;
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

//End Styles

const Slide1 = ({ changeSlide }) => {
  return (
    <StyledPopUp place={1}>
      <ImageWrapper>
        <img alt="rick" src={rick1}></img>
      </ImageWrapper>
      <DialogWrapper>
        <PopUpHead>Hey it's me, Rick!</PopUpHead>
        <SubText>
          Parasites Invaded Our House! Can you Help Me Find Them?
        </SubText>
      </DialogWrapper>
      <Button
        handleEvent={changeSlide}
        style={{ gridArea: "2 / 2 / 3 / 3" }}
        valid
      >
        Next
      </Button>
    </StyledPopUp>
  );
};

export default Slide1;

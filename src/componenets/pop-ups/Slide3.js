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
`;

const PopUpHead = styled.h1`
  margin: 0px;
  overflow: hidden;
  color: white;
  font-size: 37px;
  white-space: nowrap;
  animation: typing 1.5s steps(40, end);
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const SubText = styled.div`
  font-size: 28px;
  text-align: center;
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

const Slide3 = ({ changeSlide }) => {
  return (
    <StyledPopUp place={1}>
      <ImageWrapper>
        <img alt="rick" src={rick1}></img>
      </ImageWrapper>
      <DialogWrapper>
        <PopUpHead>Wubba Lubba Dub Dub!</PopUpHead>
      </DialogWrapper>
      <SubText>
        You Found Them all in <Timer finished>00:01:24</Timer>
      </SubText>
      <Button handleEvent={changeSlide} style={{ gridArea: "2 / 2 / 3 / 3" }}>
        Submit
      </Button>
    </StyledPopUp>
  );
};

export default Slide3;

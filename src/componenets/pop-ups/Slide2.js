import React from "react";
import styled from "styled-components";
import StyledPopUp from "./Slides";
import amishCyborg from "../../assets/parasites/amishCyborg.png";
import ghostInAJar from "../../assets/parasites/ghostInAJar.png";
import reverseGiraffe from "../../assets/parasites/reverseGiraffe.png";
import Button from "../Button";
import Parasites from "./Parasite";

const ImageSection = styled.div`
  grid-template-rows: 1 /2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledHeader = styled.h1`
  grid-template-rows: 0 /1;
  text-align: center;
  margin: 10px;
  font-size: 42px;
  color: white;
`;

const Slide2 = ({ changeSlide }) => {
  return (
    <StyledPopUp place={2}>
      <StyledHeader>Find These Parasites!</StyledHeader>
      <ImageSection>
        <Parasites parasiteName="Amish Cyborg" imgSource={amishCyborg} />
        <Parasites parasiteName="Ghost In A Jar" imgSource={ghostInAJar} />
        <Parasites parasiteName="Reverse Giraffe" imgSource={reverseGiraffe} />
      </ImageSection>
      <Button handleEvent={changeSlide} style={{ gridRow: "-1" }}>
        Play
      </Button>
    </StyledPopUp>
  );
};

export default Slide2;

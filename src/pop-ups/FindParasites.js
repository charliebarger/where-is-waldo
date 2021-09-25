import React from "react";
import styled from "styled-components";
import StyledPopUp from "./PopUp";
import amishCyborg from "../assets/parasites/amishCyborg.png";
import ghostInAJar from "../assets/parasites/ghostInAJar.png";
import reverseGiraffe from "../assets/parasites/reverseGiraffe.png";
import Button from "../Button";

const ImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  padding: 10px;
  border-radius: 100px;
  border: ${({ theme }) => theme.colors.yellow} 5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

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

const FindParasites = () => {
  return (
    <StyledPopUp place={2}>
      <StyledHeader>Find These Parasites!</StyledHeader>
      <ImageSection>
        <ImageWrapper>
          <img alt="amish cyborg" src={amishCyborg}></img>
        </ImageWrapper>
        <ImageWrapper>
          <img alt="Ghost In A Jar" src={ghostInAJar}></img>
        </ImageWrapper>
        <ImageWrapper>
          <img alt="Reverse Giraffe" src={reverseGiraffe}></img>
        </ImageWrapper>
      </ImageSection>
      <Button style={{ gridRow: "-1" }}>Play</Button>
    </StyledPopUp>
  );
};

export default FindParasites;

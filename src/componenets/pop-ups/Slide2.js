import React from "react";
import styled from "styled-components";
import StyledPopUp from "./StyledPopUp";
import Button from "../Button";
import Parasites from "./Parasite";

//Start Styles

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

//End Styles

const Slide2 = ({ changeSlide, parasites }) => {
  return (
    <StyledPopUp place={2}>
      <StyledHeader>Find These Parasites!</StyledHeader>
      <ImageSection>
        {parasites.map((parasite) => {
          return (
            <Parasites
              parasiteName={parasite.name}
              imgSource={parasite["fullBody"]}
            />
          );
        })}
      </ImageSection>
      <Button handleEvent={changeSlide} style={{ gridRow: "-1" }} valid>
        Play
      </Button>
    </StyledPopUp>
  );
};

export default Slide2;

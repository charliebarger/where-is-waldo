import React from "react";
import styled from "styled-components";

const ImageFigure = styled.figure`
  margin: 0px;
`;

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

  &:hover {
    transform: scale(1.1);
    animation: shakeIt 2s;
    animation-iteration-count: infinite;
  }

  @keyframes shakeIt {
    0% {
      transform: rotate(0deg) scale(1.1);
    }

    25% {
      transform: rotate(-25deg) scale(1.1);
    }

    75% {
      transform: rotate(25deg) scale(1.1);
    }
    100% {
      transform: rotate(0deg) scale(1.1);
    }
  }
`;

const ImageLabel = styled.figcaption`
  margin-top: 10px;
  text-align: center;
  font-size: 22px;
`;

const Parasites = ({ imgSource, parasiteName }) => {
  console.log(imgSource, parasiteName);
  return (
    <ImageFigure>
      <ImageWrapper>
        <img alt={parasiteName} src={imgSource}></img>
      </ImageWrapper>
      <ImageLabel>{parasiteName}</ImageLabel>
    </ImageFigure>
  );
};

export default Parasites;

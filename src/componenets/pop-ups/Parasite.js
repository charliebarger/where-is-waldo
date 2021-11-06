import React from "react";
import styled, { css } from "styled-components";

//Start Styles

const ImageFigure = styled.figure`
  margin: 0px;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    display: block;
  }
  ${({ found }) =>
    found
      ? css`
          background: #80808070;
          &:before {
            transform: rotate(-25deg);
            color: ${({ theme }) => theme.colors.red};
            font-size: 24px;
            content: "Found";
          }
        `
      : css`
          &:hover,
          &:active {
            background: #3c3c3cdb;
            &:before {
              color: ${({ theme }) => theme.colors.green};
              font-size: 18px;
              content: "${({ parasiteName }) => parasiteName}";
              text-align: center;
              padding: 5px;
            }
          }
        `}
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  padding: 10px;
  border-radius: 100px;
  border: ${({ found, theme }) =>
      found ? theme.colors.red : theme.colors.yellow}
    5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  ${({ header }) =>
    header &&
    css`
      height: 100px;
      width: 100px;
      padding: 15px;
    `}

  &:hover, &:active {
    transform: scale(1.1);
    animation: linear infinite shakeIt 2s;

    ${Overlay} {
      height: 100%;
      width: 100%;
    }
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

//Start Styles

const Parasites = ({ imgSource, parasiteName, header, found }) => {
  return (
    <ImageFigure>
      <ImageWrapper header={header} found={found}>
        <img alt={parasiteName} src={imgSource}></img>
        {header && <Overlay found={found} parasiteName={parasiteName} />}
      </ImageWrapper>
      {!header && <ImageLabel>{parasiteName}</ImageLabel>}
    </ImageFigure>
  );
};

export default Parasites;

import React, { useState, useEffect } from "react";
import background from "../../assets/images/background.png";
import styled, { css } from "styled-components";
import MagnifyingGlass from "./Magnify";

//Start Styles

const ImageWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  transition: all 1s;
  width: 100%;
  ${({ slide }) =>
    slide &&
    css`
      cursor: defualt;
      filter: blur(10px);
    `}
  ${({ slide }) =>
    !slide &&
    css`
      cursor: url(https://cdn.custom-cursor.com/db/cursor/32/rick_and_morty_rick_sanchez_laser_gun_cursor.png),
        default !important;
    `}
`;

//End Styles

const GameImage = ({
  slide,
  checkForHit,
  parasites,
  showMagnify,
  setShowMagnify,
  setSlide,
}) => {
  const [cords, setCords] = useState("");

  let getCords = (e) => {
    const imageSize = e.target.getBoundingClientRect();
    let offSet = e.target.parentElement.parentElement;
    const xCord = ((e.pageX - offSet.offsetLeft) / imageSize.width) * 100;
    const yCord = ((e.pageY - offSet.offsetTop) / imageSize.height) * 100;
    setCords({
      x: xCord,
      y: yCord,
    });
  };

  //if magnify icon is false at time of click get the coordinates of click, toggle showing the icon everytime
  const handleClick = (e) => {
    if (!showMagnify) {
      getCords(e);
    }
    setShowMagnify(!showMagnify);
  };

  useEffect(() => {
    if (slide) {
      setShowMagnify(false);
    }
  }, [slide]);

  //reset game on render
  useEffect(() => {
    setSlide(1);
  }, []);

  return (
    <ImageWrapper>
      <StyledImage
        onClick={handleClick}
        slide={slide}
        alt="Rick and Morty Themed Where's Waldo Game"
        src={background}
      />
      {showMagnify && (
        <MagnifyingGlass
          parasites={parasites}
          cords={cords}
          checkForHit={checkForHit}
        />
      )}
    </ImageWrapper>
  );
};

export default GameImage;

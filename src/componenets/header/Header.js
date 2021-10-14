import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hamburger from "./navigation/Hamburger";
import SlidingNav from "./navigation/SlidingNav";
import Timer from "./Timer";
import Logo from "./Logo";
import Nav from "./navigation/Nav";

//Start Styles

const StyledHeader = styled.header`
  border-bottom: 2px solid white;
  height: 100px;
  background: black;
  display: flex;
  align-items: center;
  * {
    cursor: pointer;
  }
`;

//End Styles

const Header = ({ slide, setSlide, closed, setClosed }) => {
  useEffect(() => {
    //if the screen width is greater than 850 then close the Hamburger Nav
    const closeIcon = (e) => {
      if (e.target.innerWidth > 850) {
        setClosed(false);
      }
    };

    window.addEventListener("resize", closeIcon);

    return () => window.removeEventListener("resize", closeIcon);
  }, []);

  return (
    <StyledHeader>
      <Hamburger
        slide={slide}
        closed={closed}
        setClosed={() => setClosed(!closed)}
      ></Hamburger>
      <SlidingNav setClosed={setClosed} closed={closed}></SlidingNav>
      <Logo handelEvent={() => setSlide(1)}>Where's Waldo</Logo>
      <Nav />
      {/* if the game is active render a Timer */}
      {!slide && <Timer>00:00:17</Timer>}
    </StyledHeader>
  );
};

export default Header;

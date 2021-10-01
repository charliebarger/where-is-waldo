import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hamburger from "./navigation/Hamburger";
import SlidingNav from "./navigation/SlidingNav";
import Timer from "./Timer";
import Logo from "./Logo";
import Nav from "./navigation/Nav";

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

const NavWrapper = styled.nav`
  margin-left: auto;
  @media ${({ theme }) => theme.mediaQueries.below850} {
    display: none;
  }
`;

const Header = ({ slide }) => {
  const [closed, setClosed] = useState(false);

  //if the screen width is greater than 850 then close the Hamburger Nav
  const closeIcon = (e) => {
    if (e.target.innerWidth > 850) {
      setClosed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeIcon);
  }, []);

  return (
    <StyledHeader>
      <Hamburger
        closed={closed}
        setClosed={() => setClosed(!closed)}
      ></Hamburger>
      <SlidingNav closed={closed}></SlidingNav>
      <Logo>Where's Waldo</Logo>
      <Nav />
      {!slide && <Timer>00:00:17</Timer>}
    </StyledHeader>
  );
};

export default Header;
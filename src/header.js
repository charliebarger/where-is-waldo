import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import SlidingNav from "./SlidingNav";
import { RightNavItem, NavItem } from "./NavItems";
import Timer from "./Timer";

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

const Logo = styled.span`
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 40px;
  font-family: Get Schwifty;
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.green};
  padding: 40px;

  &:hover {
    transform: scale(1.1);
  }
  @media ${({ theme }) => theme.mediaQueries.below700} {
    margin: 0px auto;
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    font-size: 28px;
    padding: 40px 20px;
  }
  @media ${({ theme }) => theme.mediaQueries.below400} {
    font-size: 24px;
    padding: 40px 20px;
  }
`;

const NavWrapper = styled.nav`
  margin-left: auto;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    display: none;
  }
`;

const Header = ({ slide }) => {
  const [closed, setClosed] = useState(false);

  const closeIcon = (e) => {
    if (e.target.innerWidth > 700) {
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
      <NavWrapper>
        <NavItem>Play Game</NavItem>
        <RightNavItem>High Scores</RightNavItem>
      </NavWrapper>
      {!slide && <Timer>00:00:17</Timer>}
    </StyledHeader>
  );
};

export default Header;

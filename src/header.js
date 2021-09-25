import React, { useState } from "react";
import styled, { css } from "styled-components";
import Hamburger from "./Hamburger";
import SlidingNav from "./SlidingNav";
import { LeftNavItem, RightNavItem, NavItem } from "./NavItems";
const StyledHeader = styled.header`
  border-bottom: 2px solid white;
  position: sticky;
  top: 0;
  height: 100px;
  background: black;
  display: flex;

  /* background: black; */

  align-items: center;
  * {
    white-space: no-wrap;
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
`;

const NavWrapper = styled.nav`
  margin-left: auto;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    display: none;
  }
`;

const Header = () => {
  const [closed, setClosed] = useState(false);
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
    </StyledHeader>
  );
};

export default Header;

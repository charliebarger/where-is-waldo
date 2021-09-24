import React, { useState } from "react";
import styled, { css } from "styled-components";
import Hamburger from "./Hamburger";
import SlidingNav from "./SlidingNav";
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

const NavItem = styled.span`
  color: white;
  font-family: Calligraphr;
  font-size: 26px;
  &:hover {
    transform: scale(1.1);
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.blue};
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.green};
  }
`;

const LeftNavItem = styled(NavItem)`
  margin-left: auto;
`;

const RightNavItem = styled(NavItem)`
  margin: 0px 50px;
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
        <LeftNavItem>Play Game</LeftNavItem>
        <RightNavItem>High Scores</RightNavItem>
      </NavWrapper>
    </StyledHeader>
  );
};

export default Header;

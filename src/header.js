import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
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
  -webkit-text-stroke: 1.5px #bedb95;
  color: #28b0c9;
  font-size: 40px;
  font-family: Get Schwifty;
  text-shadow: 0px 0px 5px limegreen;
  padding: 40px;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavItem = styled.span`
  color: white;
  font-family: Calligraphr;
  font-size: 26px;
  &:hover {
    transform: scale(1.1);
    -webkit-text-stroke: 1px #bedb95;
    color: #28b0c9;
    text-shadow: 0px 0px 5px limegreen;
  }
`;

const LeftNavItem = styled(NavItem)`
  margin-left: auto;
`;

const RightNavItem = styled(NavItem)`
  margin: 0px 50px;
`;

const Header = () => {
  return (
    <StyledNav>
      <Logo>Where's Waldo</Logo>
      <LeftNavItem>Play Game</LeftNavItem>
      <RightNavItem>High Scores</RightNavItem>
    </StyledNav>
  );
};

export default Header;

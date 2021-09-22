import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  height: 100px;
  background: black;
  display: flex;
  /* background: black; */
  box-shadow: rgb(0 0 0) 5px 5px 15px 5px;
  align-items: center;
  * {
    cursor: pointer;
  }
`;

const Logo = styled.span`
  -webkit-text-stroke: 1.5px #bedb95;
  color: #28b0c9;
  font-size: 45px;
  font-family: Get Schwifty;
  text-shadow: 0px 0px 5px limegreen;
  padding: 20px;
`;

const NavItem = styled.span`
  color: white;
  font-family: Calligraphr;
  font-size: 30px;
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

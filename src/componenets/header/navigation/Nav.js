import styled from "styled-components";
import React from "react";
import NavItem from "./NavItem";

const NavWrapper = styled.nav`
  margin-left: auto;
  @media ${({ theme }) => theme.mediaQueries.below850} {
    display: none;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavItem side="left">Play Game</NavItem>
      <NavItem side="right">High Scores</NavItem>
    </NavWrapper>
  );
};

export default Nav;

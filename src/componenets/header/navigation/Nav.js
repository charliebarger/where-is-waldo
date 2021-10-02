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
      <NavItem linkPath={"/"} side="left">
        Play Game
      </NavItem>
      <NavItem linkPath={"/high-scores"} side="right">
        High Scores
      </NavItem>
    </NavWrapper>
  );
};

export default Nav;

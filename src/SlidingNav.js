import React from "react";
import styled, { css } from "styled-components";
import { NavItem } from "./NavItems";
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  left: -50%;
  top: 100px;
  position: absolute;
  background: black;
  border-right: white 2px solid;
  color: white;
  min-height: calc(100vh - 100px);
  width: 50%;
  transition: all 0.5s;
  opacity: 0.9;
  z-index: 100;
  ${({ closed }) =>
    closed &&
    css`
      left: 0;
    `}

  @media ${({ theme }) => theme.mediaQueries.below400} {
    width: 100%;
    border-right: none;
    left: -100%;
    ${({ closed }) =>
      closed &&
      css`
        left: 0;
      `}
  }
`;

const NavItemWrapper = styled.div`
  border-bottom: hsla(0, 0%, 100%, 0.33) solid 1px;
  width: 100%;
  text-align: center;
`;

const SlidingNav = ({ closed }) => {
  return (
    <StyledNav closed={closed}>
      <NavItemWrapper>
        <NavItem mobile>Play Game</NavItem>
      </NavItemWrapper>
      <NavItemWrapper>
        <NavItem mobile>High Scores</NavItem>
      </NavItemWrapper>
    </StyledNav>
  );
};

export default SlidingNav;

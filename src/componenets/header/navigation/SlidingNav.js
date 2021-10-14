import React from "react";
import styled, { css } from "styled-components";
import NavItem from "./NavItem";

//Start Styles

const StyledSlidingNav = styled.nav`
  bottom: 0;
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

//End Styles

const SlidingNav = ({ closed, setClosed }) => {
  return (
    <StyledSlidingNav closed={closed}>
      <NavItemWrapper>
        <NavItem setClosed={setClosed} linkPath={"/"} mobile>
          Play Game
        </NavItem>
      </NavItemWrapper>
      <NavItemWrapper>
        <NavItem setClosed={setClosed} linkPath={"/high-scores"} mobile>
          High Scores
        </NavItem>
      </NavItemWrapper>
    </StyledSlidingNav>
  );
};

export default SlidingNav;

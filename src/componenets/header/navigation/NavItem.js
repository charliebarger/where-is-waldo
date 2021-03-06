import styled, { css } from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

//Start Styles

const StyledNavItem = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  color: white;
  font-family: Calligraphr;
  font-size: 26px;
  &:hover,
  &.active {
    transform: scale(1.1);
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.blue};
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.green};
  }

  ${({ mobile }) =>
    mobile &&
    css`
      text-align: center;
      font-size: 30px;
      margin: 20px;
    `}

  ${({ side }) =>
    side === "left" &&
    css`
      margin-left: auto;
    `}

   ${({ side }) =>
    side === "right" &&
    css`
      margin: 0px 50px;
    `}
`;

//End Styles

const NavItem = ({ children, side, mobile, linkPath, setClosed }) => {
  return (
    <StyledNavItem
      onClick={setClosed ? () => setClosed(false) : null}
      to={linkPath}
      exact
      activeClassName="active"
      mobile={mobile ? "true" : ""}
      side={side}
    >
      {children}
    </StyledNavItem>
  );
};

export default NavItem;

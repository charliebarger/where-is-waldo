import React from "react";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  left: -50%;
  ${({ closed }) =>
    closed &&
    css`
    top: 100px;
    left: 0%;
    position: absolute;
    background: white;
    color: white;
    min-height: calc(100vh - 100px);
    width: 50%;
    transition: all .5s;
}
    `}
`;

const SlidingNav = ({ closed }) => {
  return <StyledNav closed={closed}></StyledNav>;
};

export default SlidingNav;

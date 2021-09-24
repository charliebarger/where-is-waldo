import React from "react";
import styled, { css } from "styled-components";

const HamburgerIcon = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    width: 40px;
    margin-left: 30px;
    position: absolute;
    display: block;
    div,
    &:after,
    &:before {
      background: white;
      content: "";
      display: block;
      height: 5px;
      width: 100%;
      margin: 7px 0px;
      transition: all 0.5s;
    }

    ${({ closed }) =>
      closed &&
      css`
        div {
          transform: scale(0);
        }
        &:before {
          transform: translateY(12px) rotate(135deg);
        }
        &:after {
          transform: translateY(-12px) rotate(-135deg);
        }
        div,
        &:after,
        &:before {
          transition: all 0.5s;
        }
      `}
  }
`;

const Hamburger = ({ closed, setClosed }) => {
  console.log(closed);
  return (
    <HamburgerIcon closed={closed} onClick={() => setClosed(!closed)}>
      <div />
    </HamburgerIcon>
  );
};

export default Hamburger;

import React from "react";
import styled, { css } from "styled-components";

//Start Styles

const HamburgerIcon = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaQueries.below850} {
    width: 40px;
    margin-left: 30px;

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

    @media ${({ theme }) => theme.mediaQueries.below550} {
      transform: scale(0.9);
    }

    @media ${({ theme }) => theme.mediaQueries.below400} {
      transform: scale(0.8);
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

    ${({ slide }) =>
      slide &&
      css`
        position: absolute;
      `}
  }
`;

//End Styles

const Hamburger = ({ closed, setClosed, slide }) => {
  return (
    <HamburgerIcon
      slide={slide}
      closed={closed}
      onClick={() => setClosed(!closed)}
    >
      <div />
    </HamburgerIcon>
  );
};

export default Hamburger;

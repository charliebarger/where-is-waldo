import styled from "styled-components";
import React from "react";
const StyledLogo = styled.span`
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 40px;
  font-family: Get Schwifty;
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.green};
  padding: 40px;

  &:hover {
    transform: scale(1.1);
  }
  @media ${({ theme }) => theme.mediaQueries.below850} {
    margin: 0px auto;
  }
  @media ${({ theme }) => theme.mediaQueries.below550} {
    font-size: 28px;
    padding: 40px 20px;
  }
  @media ${({ theme }) => theme.mediaQueries.below400} {
    font-size: 24px;
    padding: 40px 20px;
  }
`;

const Logo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export default Logo;

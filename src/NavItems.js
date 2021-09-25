import styled, { css } from "styled-components";

const NavItem = styled.span`
  display: inline-block;
  color: white;
  font-family: Calligraphr;
  font-size: 26px;
  &:hover,
  .info-slide:active {
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
`;

const LeftNavItem = styled(NavItem)`
  margin-left: auto;
`;

const RightNavItem = styled(NavItem)`
  margin: 0px 50px;
`;

export { NavItem, LeftNavItem, RightNavItem };

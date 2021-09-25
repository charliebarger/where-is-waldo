import styled, { css } from "styled-components";

const StyledPopUp = styled.div`
  padding: 20px;
  display: grid;
  border-radius: 20px;
  width: 600px;
  height: 400px;
  position: absolute;
  background: linear-gradient(
    -45deg,
    rgba(40, 176, 201, 0.9) 44%,
    rgba(50, 205, 50, 0.9) 95%
  );
  grid: ${({ place }) =>
    place === 1 ? "1fr 50px / 1fr 1fr" : "auto 1fr 68px / 1fr"};
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 40px auto;
  border: ${({ theme }) => theme.colors.yellow} solid 5px;
`;

export default StyledPopUp;

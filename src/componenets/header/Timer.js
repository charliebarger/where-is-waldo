import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import FormatTime from "../../assets/helpers/formatTime";
//Start Styles

const StyledTimer = styled.div`
  &&& {
    cursor: default;
  }
  position: relative;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.green};
  cursor: default;
  display: flex;
  background: black;
  color: white;
  font-family: "Gemunu Libre", sans-serif;
  font-size: 26px;
  margin-right: 50px;
  border: ${({ theme }) => theme.colors.blue} solid 2px;
  padding: 5px 10px;
  border-radius: 10px;
  @media ${({ theme }) => theme.mediaQueries.below850} {
    margin-right: 30px;
  }
  @media ${({ theme }) => theme.mediaQueries.below550} {
    font-size: 22px;
  }
  @media ${({ theme }) => theme.mediaQueries.below400} {
    font-size: 16px;
    margin-right: 30px;
  }
  ${({ finished }) =>
    finished &&
    css`
      & {
        margin: 0px;
        margin-left: 5px;
        color: #e73f40;
        box-shadow: 2px 2px 5px black;
        border: white solid 2px;
        font-size: 24px;
      }
    `}
`;

const Hi = styled.div`
  visibility: hidden;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

const Time = styled.span`
  text-align: center;
  margin: auto;
`;

//End Styles

const Timer = ({ second, finished, isActive, setSecond }) => {
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  useEffect(() => {
    let intervalId;
    let delay;
    if (isActive) {
      delay = setTimeout(() => {
        intervalId = setInterval(() => {
          setSecond((prevSecond) => prevSecond + 1);
        }, 1000);
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(delay);
    };
  }, [isActive, setSecond]);

  // FormatTime(second);

  return (
    <StyledTimer finished={finished}>
      <Hi>00:00:00</Hi>
      <TimeWrapper>
        <Time>{FormatTime(second)}</Time>
      </TimeWrapper>
    </StyledTimer>
  );
};

export default Timer;

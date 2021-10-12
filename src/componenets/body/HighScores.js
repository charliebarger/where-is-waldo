import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const ScoreBoardWrapper = styled.div`
  border: ${({ theme }) => theme.colors.blue} 2px solid;
  padding: 20px;
  width: 80%;
  max-width: 650px;
  margin: 20px auto;
  background: white;
  box-shadow: 5px 5px 10px #000000;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.mediaQueries.below400} {
    width: 90%;
  }
`;
const ScoreBoard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 4fr 1fr;
  font-size: 22px;
  gap: 2px;
  background: ${({ theme }) => theme.colors.blue};
  * {
    background: white;
    padding: 10px;
  }
`;

const ScoreHeader = styled.h1`
  text-align: center;
  font-size: 42px;
`;

const GridHeader = styled.div`
  font-size: 26px;
  padding-right: 20px;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    ${({ place }) =>
      place &&
      css`
        font-size: 0px;
      `}
  }
`;

const Numbers = styled.div`
  font-family: "Gemunu Libre", sans-serif;
  @media ${({ theme }) => theme.mediaQueries.below550} {
    font-size: 18px;
  }
`;

const UserNames = styled.div`
  font-size: 22px;
  @media ${({ theme }) => theme.mediaQueries.below550} {
    ${({ place }) =>
      !place &&
      css`
        font-size: 22px;
      `}
    @media ${({ theme }) => theme.mediaQueries.below400} {
      font-size: 18px;
    }
  }
`;

const HighScores = ({ setSlide, username, setUsername, addUsername }) => {
  useEffect(() => {
    setSlide(1);
  }, []);

  useEffect(() => {
    alert(username);
  }, []);
  const winners = [
    { name: "Rick", time: "00:10:01" },
    { name: "Morty", time: "00:10:01" },
    { name: "Rick", time: "00:10:01" },
    { name: "Rick", time: "00:10:01" },
    { name: "Rick", time: "00:10:01" },
    { name: "Rick", time: "00:10:01" },
    { name: "Rick", time: "00:10:01" },
    { name: "Rick", time: "00:10:01" },
    { name: "Rick", time: "00:10:01" },
    { name: "Rick", time: "00:10:01" },
  ];
  return (
    <div>
      <ScoreHeader>High Scores</ScoreHeader>
      <ScoreBoardWrapper>
        <ScoreBoard>
          <GridHeader place>Place</GridHeader>
          <GridHeader>Name</GridHeader>
          <GridHeader>Time</GridHeader>
          {winners.map((winner, index) => {
            return (
              <>
                <Numbers>{index + 1}</Numbers>
                <UserNames>{winner.name}</UserNames>
                <Numbers>{winner.time}</Numbers>
              </>
            );
          })}
        </ScoreBoard>
      </ScoreBoardWrapper>
    </div>
  );
};

export default HighScores;

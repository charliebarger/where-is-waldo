import React from "react";
import styled from "styled-components";

const ScoreBoardWrapper = styled.div`
  border: ${({ theme }) => theme.colors.blue} 2px solid;
  padding: 20px;
  width: 80%;
  margin: 20px auto;
  background: white;
  box-shadow: 5px 5px 10px #000000;
`;
const ScoreBoard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 4fr 1fr;
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
  font-size: 28px;
`;

const Numbers = styled.div`
  font-family: "Gemunu Libre", sans-serif;
`;

const HighScores = () => {
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
          <GridHeader>Place</GridHeader>
          <GridHeader>Name</GridHeader>
          <GridHeader>Time</GridHeader>
          {winners.map((winner, index) => {
            return (
              <>
                <Numbers>{index + 1}</Numbers>
                <div>{winner.name}</div>
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

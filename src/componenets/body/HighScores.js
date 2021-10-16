import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  collection,
  getDocs,
  limit,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import db from "../../componenets/firebase.config";
import FormatTime from "../../assets/helpers/formatTime";

//Start Styles

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
  font-family: "Gemunu Libre", sans-serif;
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

//End Styles

const HighScores = ({ slide, setSlide }) => {
  const [winners, setWinners] = useState("");

  //get top 10 player on the leaderbaord
  const getLeaders = async () => {
    const playerRef = collection(db, "players");
    onSnapshot(query(playerRef, limit(10), orderBy("time")), (doc) =>
      setWinners(doc.docs)
    );
  };

  useEffect(() => {
    if (slide !== 4) {
      setSlide(1);
    }
    getLeaders();
  }, [slide]);

  return (
    <div>
      <ScoreHeader>High Scores</ScoreHeader>
      <ScoreBoardWrapper>
        <ScoreBoard>
          <GridHeader place>Place</GridHeader>
          <GridHeader>Name</GridHeader>
          <GridHeader>Time</GridHeader>
          {winners &&
            winners.map((winner, index) => {
              winner = winner.data();
              return (
                <>
                  <Numbers>{index + 1}</Numbers>
                  <UserNames>{winner.username}</UserNames>
                  <Numbers>{FormatTime(winner.time)}</Numbers>
                </>
              );
            })}
        </ScoreBoard>
      </ScoreBoardWrapper>
    </div>
  );
};

export default HighScores;

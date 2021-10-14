import React from "react";
import styled, { keyframes } from "styled-components";

//Start Styles

const rotatePhone = keyframes`
0% {
		transform: rotate(0deg)
	}
  
  50% {
		transform: rotate(0deg)
	}
	
	100% {
		transform: rotate(90deg)
	}
`;

const Phone = styled.div`
  height: 200px;
  width: 100px;
  backdrop-filter: saturate(180%) blur(10px);
  border: black solid 5px;
  border-bottom: black solid 25px;
  border-top: black solid 25px;
  border-radius: 10px;
  background: white;
  position: relative;
  animation: ${rotatePhone} 1.5s ease-in-out infinite alternate;
`;

const PhoneWrapper = styled.div`
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: black solid 2px;
  border-radius: 10px;
  background: #ffffffad;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  backdrop-filter: blur(10px);
`;

const Message = styled.span`
  font-size: 22px;
`;

const Exit = styled.div`
  cursor: pointer;
  margin-left: auto;
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:before,
  &:after {
    background: black;
    content: "";
    display: block;
    width: 100%;
    height: 5px;
  }
  &:before {
    transform: translateY(2.5px) rotate(135deg);
  }

  &:after {
    transform: translateY(-2.5px) rotate(-135deg);
  }
`;

//End Styles

const TurnPhone = ({ setClose }) => {
  return (
    <BlurBackground>
      <PhoneWrapper>
        <Exit onClick={() => setClose(true)} />
        <Phone></Phone>
        <Message>Please Rotate Your Device!</Message>
      </PhoneWrapper>
    </BlurBackground>
  );
};

export default TurnPhone;

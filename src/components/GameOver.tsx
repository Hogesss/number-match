import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  margin-top: 32px;
  font-size: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
`;

function GameOver() {
  const navigate = useNavigate();

  return (
    <Content>
      <div>Congratulations! You won!!</div>
      <div>Your Score: {localStorage.getItem("score")}</div>
      <Button onClick={() => navigate("/")}>Restart</Button>
    </Content>
  );
}

export default GameOver;

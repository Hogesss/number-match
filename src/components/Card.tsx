import React from "react";
import styled from "styled-components";

const StyledCard = styled.div<{ variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  font-size: 64px;
  height: 200px;
  width: 140px;
  border: 1px solid black;
  border-radius: 4px;

  background-color: ${(props) =>
    props.variant === "hidden" ? "#dc5f00" : "#373a40"};

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

type CardProps = {
  onClick?: () => void;
  hidden: boolean;
  children: any;
};

function Card({ onClick, hidden, children }: CardProps) {
  return (
    <StyledCard variant={hidden ? "hidden" : "revealed"} onClick={onClick}>
      {hidden ? "?" : children}
    </StyledCard>
  );
}

export default Card;

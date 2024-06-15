import React from "react";
import styled, { css } from "styled-components";

type CardVariant = {
  variant: "hidden" | "revealed";
};

const CardStyles = css<CardVariant>`
  padding: 10px;
  font-size: 64px;
  height: 200px;
  width: 140px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #373a40;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }

  ${(props) =>
    props.variant === "hidden" &&
    css`
      background-color: #dc5f00;
    `}
`;

const StyledCard = styled.div<CardVariant>`
  ${CardStyles}
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

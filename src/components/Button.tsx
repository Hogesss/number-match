import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #373a40;
  color: white;
  box-shadow: none;
  cursor: pointer;

  font-size: 26px;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

type ButtonProps = {
  onClick?: () => void;
  children: string;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} type="submit">
      {children}
    </StyledButton>
  );
}

export default Button;

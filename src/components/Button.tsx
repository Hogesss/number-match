import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  margin-left: 12px;
  border-radius: 4px;
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

import React from "react";
import styled from "styled-components";

const Title = styled.header`
  padding: 10px;
  font-size: 32px;
  font-weight: 700;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #373a40;
`;

function Header() {
  return <Title>The Matching Number Game</Title>;
}

export default Header;

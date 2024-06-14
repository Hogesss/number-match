import React from "react";
import styled from "styled-components";

const Title = styled.header`
  padding: 10px;
  font-size: 32px;
  border: 1px solid black;
`;

function Header() {
  return <Title>Best number match game... ever</Title>;
}

export default Header;

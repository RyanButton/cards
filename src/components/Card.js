import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  padding: 32px;
  margin: 8px;
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 3px;
  color: white;
`;

export default function Card({ message }) {
  return <Container>{message}</Container>;
}

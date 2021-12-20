import * as React from "react";
import styled from "styled-components";

const WIDTH_HEIGHT = "100px";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #da0037;
  padding: 32px;
  margin: 1.5px;
  min-width: ${WIDTH_HEIGHT};
  max-width: ${WIDTH_HEIGHT};
  min-height: ${WIDTH_HEIGHT};
  max-height: ${WIDTH_HEIGHT};
  color: white;
`;

export function Card({ message }) {
  return <Container>{message}</Container>;
}

import * as React from "react";
import styled from "styled-components";

const WIDTH_HEIGHT = "184px";

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #da0037;
  margin: 1.5px;
  min-width: ${WIDTH_HEIGHT};
  max-width: ${WIDTH_HEIGHT};
  min-height: ${WIDTH_HEIGHT};
  max-height: ${WIDTH_HEIGHT};
  color: white;
`;

const DeleteIcon = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 2px 0px 5px;
  opacity: 0.2;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export function Card({ id, message, deleteCard }) {
  return (
    <Container>
      <DeleteIcon onClick={() => deleteCard(id)}>
        <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" />
      </DeleteIcon>
      {message}
    </Container>
  );
}

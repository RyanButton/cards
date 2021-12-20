import { Card } from "./components/Card";
import Header from "./layout/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";

const CardContainer = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

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
CardContainer.displayName = "CardContainer";

const cardsInit = [
  { key: 1, message: "hello" },
  { key: 2, message: "G'DAY" },
  { key: 3, message: "fush n chups" },
  { key: 4, message: "eetswa" },
  { key: 5, message: "fubbernut" },
  { key: 6, message: "hellod" },
];

function App() {
  const [cards = cardsInit, AddCard] = useState();

  const addCard = (message) => {
    cards.push({ key: new Date().getMilliseconds(), message: message });
    console.log(cards);
    return [...cards];
  };

  return (
    <>
      <Header />
      <CardContainer>
        {cards.map((card) => (
          <Card message={card.message} />
        ))}

        <Container>
          <button onClick={() => AddCard(addCard("message"))}>+</button>
        </Container>
      </CardContainer>
    </>
  );
}

export default App;

import { Card } from "./components/Card";
import Header from "./layout/Header";
import styled from "styled-components";
import { useState } from "react";

const CardContainer = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
`;
CardContainer.displayName = "CardContainer";

const WIDTH_HEIGHT = "120px";
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
Container.displayName = "Container";

const cardsInit = [];

function App() {
  const [cards, setCards] = useState(cardsInit);
  const [cardNo, setCardNo] = useState(1);
  const [addingNewCard, setAddingNewCard] = useState(false);

  const addCard = (message) => {
    setCardNo(() => cardNo + 1);
    cards.push({ id: cardNo, message: message });
    return [...cards];
  };
  const handleSubmit = (event) => {
    setCards(addCard(event.target[0].value));
    setAddingNewCard(false);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const Input = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Card text:
          <input type="text" name="card-text" autocomplete="off" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };

  return (
    <>
      <Header />
      <CardContainer>
        {cards.map((card) => (
          <Card id={card.id} message={card.message} deleteCard={deleteCard} />
        ))}

        <Container>
          {!addingNewCard && (
            <button onClick={() => setAddingNewCard(true)}>+</button>
          )}
          {addingNewCard && <Input />}
        </Container>
      </CardContainer>
    </>
  );
}

export default App;

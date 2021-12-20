import Card from "./components/Card";
import Header from "./layout/Header";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const cards = [
  { message: "hello" },
  { message: "G'DAY" },
  { message: "fush n chups" },
  { message: "eetswa" },
  { message: "fubbernut" },
  { message: "hello" },
];

CardContainer.displayName = "CardContainer";
function App() {
  return (
    <>
      <Header />
      <CardContainer>
        {cards.map((card) => (
          <Card message={card.message} />
        ))}
      </CardContainer>
    </>
  );
}

export default App;

import Card from "./components/Card";
import Header from "./layout/Header";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
`;

CardContainer.displayName = "CardContainer";
function App() {
  return (
    <>
      <Header />
      <CardContainer>
        <Card message="hello" />
        <Card message="hi" />
        <Card message="gday" />
      </CardContainer>
    </>
  );
}

export default App;

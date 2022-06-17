import Header from "./assets/styles/Header";
import Container from "./assets/styles/Container";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Header>
        <Container>
          <h1>Wings Store</h1>
          <Navbar></Navbar>
        </Container>
      </Header>
    </>
  );
}

export default App;

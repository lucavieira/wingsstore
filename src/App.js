import Header from "./assets/styles/Header";
import Container from "./assets/styles/Container";
import Navbar from "./components/Navbar";
import Logo from "./assets/images/logo.png"
import AppRoutes from "./routes";
import Banners from "./assets/styles/Banners";

function App() {
  return (
    <>
      <Header>
        <Container className="menu">
          <a href="/">
            <img src={Logo} id="logo" />
          </a>
          <Navbar></Navbar>
        </Container>
      </Header>
      <body>
        <Banners></Banners>
        <AppRoutes></AppRoutes>
      </body>
    </>
  );
}

export default App;

// import Parent from "./components/Parent"; TUGAS BASIC COMPONENT

import Button from "./components/Button/Index";
// import InputRadio from "./components/Button/InputRadio";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Robbi A Ilham</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="jumbotron">
        <div className="img-fortopolio"></div>
        <h1 className="display-4">Robbi Amanda Ilham</h1>
        <p className="lead">Web Developper</p>

        <section id="about">
          <div className="container">
            <div className="row text-center mb-3">
              <div className="col">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row justify-content-center fs-5 text-center">
              <div className="col-6">
                <p>Saya adalah seorang..... Accusantium molestias doloremque vitae quia temporibus laboriosam in ipsum laborum nisi, nihil quod ipsam ad hic. Inventore!</p>
              </div>
            </div>
          </div>
        </section>

        <Button />
      </div>
    </div>
  );
}

export default App;

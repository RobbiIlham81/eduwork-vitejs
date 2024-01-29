import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar className="navbar navbar-expand-lg bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="badge bg-light text-dark fs-5" href="#home">
          NewsApp
        </Navbar.Brand>
        <Nav className="ml-auto">
          {/* <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Work</Nav.Link> */}
          <Nav.Link href="#pricing">Technology</Nav.Link>
          <Nav.Link href="#pricing">Business</Nav.Link>
          <Nav.Link href="#pricing">Health</Nav.Link>
          <Nav.Link href="#pricing">Science</Nav.Link>
          <Nav.Link href="#pricing">Sports</Nav.Link>
          <Nav.Link href="#pricing">Entertainment</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;

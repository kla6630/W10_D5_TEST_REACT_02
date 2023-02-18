import { Navbar, Nav } from "react-bootstrap";

const MyNav = () => (
  <Navbar bg="light" variant="light" className="p-3">
    <Navbar.Brand href="#home">My First Weather APP</Navbar.Brand>
    {/* <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav> */}
  </Navbar>
);

export default MyNav;

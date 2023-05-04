import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/components/NavBar.module.scss";


const NavBr = (props) => {
  return (
    <>
      <Navbar
        className={`${styles.navBr} w-75 p-3 position-relative top-0 start-50 translate-middle-x`}
        expand="sm"
      >
        <Container>
          <Navbar.Brand href="/" as={Link}>
            RocketCode
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link href="/about" as={Link}>
                Acerca de Nosotros
              </Nav.Link>
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBr;

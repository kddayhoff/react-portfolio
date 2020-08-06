import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"


const styles = {
    navbar: {
        background: "darkgray",
        border: "solid",
        borderColor:"black",
        borderWidth: "3px",
        fontFamily: 'Sawarabi Gothic'
    }
}

function Header() {
    return(
<Navbar sticky="top" expand="lg" style={styles.navbar}href="#who">
  <Navbar.Brand >Karla Dayhoff</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
      <Nav.Link href="#who">Who?</Nav.Link>
      <Nav.Link href="#what">What?</Nav.Link>
      <Nav.Link href="#how">How?</Nav.Link>
      <Nav.Link href="mailto:kddayhoff@gmail.com">Email</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )};

    export default Header
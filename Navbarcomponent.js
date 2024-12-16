import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Menumanage from '../Menumanage'; 

const Navbarcomponent = () => {
  const [showMenuManage, setShowMenuManage] = useState(false);

  
  const toggleMenuManage = () => {
    setShowMenuManage(!showMenuManage);
  };

  return (
    <div>
      <Navbar expand="lg" bg="light" variant="light" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <span style={{ color: "skyblue" }}>DEEP</span> NET{" "}
            <span style={{ color: "skyblue" }}>SOFT</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link 
                style={{ cursor: "pointer" }} 
                onClick={toggleMenuManage} // Trigger menu management view
              >
                MENU
              </Nav.Link>
              <Nav.Link href="#reservation">MAKE A RESERVATION</Nav.Link>
              <Nav.Link href="#contact">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conditionally render the Menumanage component */}
      {showMenuManage && <Menumanage />}
    </div>
  );
};

export default Navbarcomponent;

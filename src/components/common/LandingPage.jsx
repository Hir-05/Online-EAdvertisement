import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../assets/LandingPage.css";
import { Link } from "react-router-dom";
import background from "../../assets/media/background.mp4"


const LandingPage = () => {
  return (
    <>
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
           <h3 className="logotext">EAdvertisement</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ Link } to="/layouts/Gallery" className= "ourgallery" style={{ color: "#0C38CA", fontSize: "20px" }}>
             Our Gallery
            </Nav.Link>
            <Nav.Link to="/AboutUs" className= "aboutus" style={{ color: "#0C38CA", fontSize: "20px" }}>
             About Us
            </Nav.Link>
            <Nav.Link as={ Link } to="/layouts/Blogs" className= "blogs" style={{ color: "#0C38CA", fontSize: "20px" }}>
             Blogs
            </Nav.Link>
            <Nav.Link to="/faqs" className= "faqs" style={{ color: "#0C38CA", fontSize: "20px" }}>
             FAQs
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto rightnav">
            <Nav.Link as={ Link } to="/Login" className= "login" style={{ color: "#0C38CA", fontSize: "20px" }}>
             Login
            </Nav.Link>
            <Nav.Link as={ Link } to="/SignUp" className= "signup" style={{ color: "#0C38CA", fontSize: "20px" }}>
             SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div><br></br>
    <div className="imagecontainer">
    <video autoPlay loop muted className="video">
      <source src={background} type="video/mp4" />
    </video>
</div>
</>
  )
}

export default LandingPage

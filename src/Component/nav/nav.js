import React from "react";
import "./nav.css";
import logo from "./../../Images/logo.png"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Navs = () => {
    return (
    <Navbar expand="lg" className="navbar">
    <Container>
        <Navbar.Brand href="#home"><img src={logo} title="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#Explore">Explore foods</Nav.Link>
            <Nav.Link href="#slider">reviews</Nav.Link>
            <Nav.Link href="#ques">fAQ</Nav.Link>
        </Nav>
        <nav>
            <Nav.Link className="number"href="tel:02220002" >02220002</Nav.Link>
        </nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
};

export default Navs;

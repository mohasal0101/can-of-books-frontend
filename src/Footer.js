import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Styling/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="footer-nav-brand">
          All Rights Reserved - Code Fellows &copy; 2022
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
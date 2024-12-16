import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Row>
        <Col md={4} sm={12} className="foot">
          <h3 style={{ color: "skyblue" }}>CONNECT WITH US</h3>
          <p>+91 9561834340</p>
          <p>info@deepnetsoft.com</p>
        </Col>
        <Col md={4} sm={12} className="foot text-center">
          <h3 style={{ color: "skyblue" }}>DeepnetSoft</h3>
        </Col>
        <Col md={4} sm={12} className="foot">
          <h3 style={{ color: "skyblue" }}>FIND US</h3>
          <p>First Floor Dee Infopark, Infort KPY, Kakasad</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4} sm={12} className="text-center">
          <p>© 2024 DeepnetSoft Solutions. All rights reserved.</p>
        </Col>
        <Col md={4} sm={12} className="text-center">
          <p>Terms and Conditions</p>
        </Col>
        <Col md={4} sm={12} className="text-center">
          <p>Privacy Policy</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Navbar className="footer fixed-bottom navbar-expand-lg">
        <Link to="/help">Help</Link>
      </Navbar>
    </div>
  );
}

export default Footer;

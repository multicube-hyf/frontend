import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Help from "../components/help/Help";
import { Fab } from "@material-ui/core";





function Footer() {
  return (
    <div>
      <Navbar className="footer fixed-bottom justify-content-between">
      <Fab color="secondary" aria-label="edit">
       <Link to="/help"><Help/></Link>
       </Fab>
      </Navbar>
    </div>
  );
}

export default Footer;


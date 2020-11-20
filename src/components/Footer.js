import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Help from "../components/help/Help";
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import { Fab } from "@material-ui/core";





function Footer() {
  return (
    <div>
      <Navbar className="footer fixed-bottom justify-content-between">
      <Fab color="secondary" aria-label="edit">
       <Link to="/help"><Help/></Link>
       </Fab>
       <Nav>
       <Nav.Link><Button className="">Get Started</Button></Nav.Link>
       </Nav>
       <Fab color="secondary" aria-label="edit">
       <Nav.Link href="/"><ArrowForwardSharpIcon/></Nav.Link>
       </Fab>
       
       
      </Navbar>
    </div>
  );
}

export default Footer;


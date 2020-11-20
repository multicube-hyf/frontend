import React from "react";

import { Nav, Navbar, Media } from "react-bootstrap";

import logo from "../assets/images/logo.png";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import  Star  from "../components/star/Star";


function Header() {
  return (
    <div>
      <Navbar id="navigationBar" className="justify-content-between">
        <Media>
          <img id="logoImg" src={logo} alt="logo" />
        </Media>
        <Navbar.Brand id="title" href="/">
          Multi Cube
        </Navbar.Brand>

		<Nav>
		<Nav.Item className="mr-3">
		<Star/>
		</Nav.Item>
		<Nav.Item>
		  <AccountCircleOutlinedIcon color="primary" fontSize="medium"/>
		</Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Header
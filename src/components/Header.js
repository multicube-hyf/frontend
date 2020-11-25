import React, { useContext }  from "react";
import Progress from '../components/progress/Progress';
import NumberContext from '../numberContext/NumberContext';

import { Nav, Navbar, Media } from "react-bootstrap";

import logo from "../assets/images/logo.png";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";




function Header() {
  const { completedExercises, numberOfExercises } = useContext(NumberContext);
  return (
    <div>
      <Navbar id="navigationBar" className="justify-content-between">
        <Media>
          <img id="logoImg" src={logo} alt="logo" />
        </Media>
        

		<Nav>
		<Nav.Item className="mr-3">
		<div className='progressStars'>
				<Progress
					stepsNumber={numberOfExercises}
					completedStepsCount={completedExercises}
				/>
			</div>
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
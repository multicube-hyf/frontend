import React, { useContext }  from "react";
import Progress from '../components/progress/Progress';
import NumberContext from '../numberContext/NumberContext';

import { Nav, Navbar} from "react-bootstrap";

import logo from "../assets/images/logo.png";

import  Icon  from "./help/Icon";




function Header() {
  const { completedExercises, numberOfExercises } = useContext(NumberContext);
  return (
    <div>
	  <Navbar id="navigationBar" className="justify-content-between">
	  <Navbar.Brand href="/">
       
          <img id="logoImg" src={logo} alt="logo" />
        
       </Navbar.Brand> 

		<Nav>
		<Nav.Item>
		<div className='progressStars'>
				<Progress
					stepsNumber={numberOfExercises}
					completedStepsCount={completedExercises}
				/>
			</div>
		</Nav.Item>
		<Nav.Item>
		<Icon/>
		</Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Header
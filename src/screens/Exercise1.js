import React, { useState } from 'react';
import Progress from '../components/progress/Progress';
//import Rectangle from '../components/rectangle/Rectangle';
import SelectNumbers from '../components/selectNumbers/SelectNumbers';

function Exercise1() {
  const [completedStepsCount, setCompletedStepsCount] = useState(0);


	return (
		<div>
			<Progress stepsNumber={6} completedStepsCount={completedStepsCount} />
			<SelectNumbers numToFind={5} />
		</div>
	);
}

export default Exercise1;

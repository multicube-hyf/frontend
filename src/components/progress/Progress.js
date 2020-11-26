import React from 'react';
import Star from '../star/Star';

function Progress({ stepsNumber, completedStepsCount }) {
	// Generate array with a list of steps
	let completedSteps = [...Array(completedStepsCount).keys()];

	// Remaining steps to complete
	const remainingStepsCount = stepsNumber - completedStepsCount;
	let remainingSteps = [...Array(remainingStepsCount).keys()];

	return (
		<div>
			{completedSteps.map((starNum) => (
				<Star key={starNum} isHighlighted={true} />
			))}
			{remainingSteps.map((starNum) => (
				<Star key={starNum} isHighlighted={false} />
			))}
		</div>
	);
}

export default Progress;

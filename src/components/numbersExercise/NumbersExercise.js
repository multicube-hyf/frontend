//import StarBorderIcon from '@material-ui/icons/StarBorder';
import React, { useState, useEffect } from 'react';
import Matrix from '../matrix/Matrix';
import Star from '../star/Star';

import './numbersExercise.css';

function NumbersExercise({
	numToFind,
	setCompletedExercises,
	completedExercises,
}) {
	const [selectedCubes, setSelectedCubes] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);

	useEffect(() => {
		if (selectedCubes === numToFind) {
			setIsCompleted(true);
		} else {
			setIsCompleted(false);
		}
	}, [selectedCubes, numToFind]);

	return (
		<div className='row-line'>
			<p className='num2find'>{numToFind}</p>

			<Matrix
				selectedCubes={selectedCubes}
				setSelectedCubes={setSelectedCubes}
			/>
			{isCompleted && (
				<div>
					<div className='start-position'>
						<Star width={76} height={72} isHighlighted={true} />
					</div>

					<p className='star-number'>{numToFind}</p>
					<p className='super'>Super!</p>
				</div>
			)}
		</div>
	);
}

export default NumbersExercise;

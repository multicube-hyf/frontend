/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import NumberContext from '../../numberContext/NumberContext';
import Matrix from '../matrix/Matrix';
import Star from '../star/Star';

import './numbersExercise.css';

function NumbersExercise({ numToFind }) {
	const {
		completedExercises,
		setCompletedExercises,
		isCompleted,
		setIsCompleted,
	} = useContext(NumberContext);

	const [selectedCubes, setSelectedCubes] = useState(0);

	useEffect(() => {
		// Track the completion status of the current exercise
		if (selectedCubes === numToFind) {
			setIsCompleted(true);
		} else {
			setIsCompleted(false);
		}
	}, [selectedCubes, numToFind]);

	useEffect(() => {
		// Increment the completedExercise number by 1
		if (isCompleted) {
			let updateCompleted = completedExercises + 1;

			setCompletedExercises(updateCompleted);
		}
		// Decrement the completedExercise number by 1 if bigger than zero
		if (!isCompleted && completedExercises > 0) {
			let updateCompleted = completedExercises - 1;
			setCompletedExercises(updateCompleted);
		}
	}, [isCompleted]);

	return (
		<div className='row-line'>
			<p className='num2find'>{numToFind}</p>

			<Matrix
				selectedCubes={selectedCubes}
				setSelectedCubes={setSelectedCubes}
			/>
			{isCompleted && (
				<div>
					<div className='star-position'>
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

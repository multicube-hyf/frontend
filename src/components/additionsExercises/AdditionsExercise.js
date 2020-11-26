/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import NumberContext from '../../numberContext/NumberContext';
import Matrix from '../matrix/Matrix';
import Rectangle from '../rectangle/Rectangle';
import Star from '../star/Star';


import './additionsExercise.css';


function AdditionExercise({ number1, number2, history }) {
	const {
		completedExercises,
		setCompletedExercises,
		isCompleted,
		setIsCompleted,
	} = useContext(NumberContext);

	const [selectedCubes, setSelectedCubes] = useState(0);


	let sum = number1 + number2;

	useEffect(() => {
		// Track the completion status of the current exercise
		if (selectedCubes === sum) {
			setIsCompleted(true);
		} else {
			setIsCompleted(false);
		}
	}, [selectedCubes, sum]);

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
		<div>
			<p className='numbers-2'>{number1}<strong>+</strong>{number2}</p>
			<div className="row-line">
				<Rectangle className='rectangle space' selectedNumber={number1} />
				<h2><strong>+</strong></h2>
				<Rectangle className='rectangle' selectedNumber={number2} />
				<h2><strong>=</strong></h2>
			<Matrix
				className='matrix'
				selectedCubes={selectedCubes}
				setSelectedCubes={setSelectedCubes}
			/>
			</div>
			{isCompleted && (
				<div>
					<div className='star-position'>
						<Star width={76} height={72} isHighlighted={true} />
					</div>

					<p className='star-number'>{sum}</p>
					<p className='super'>Super!</p>
					
				</div>
			)}
		</div>
	);
}

export default AdditionExercise;

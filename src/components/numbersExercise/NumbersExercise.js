/* eslint-disable react-hooks/exhaustive-deps */
//import StarBorderIcon from '@material-ui/icons/StarBorder';
import React, { useState, useEffect, useContext } from 'react';
import NumberContext from '../../numberContex/NumberContext';
import Matrix from '../matrix/Matrix';
import Star from '../star/Star';

import './numbersExercise.css';

function NumbersExercise({ numToFind, history }) {
	const {
		completedExercises,
		setCompletedExercises,
		numberOfExercises,
	} = useContext(NumberContext);

	const [selectedCubes, setSelectedCubes] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);
	const [nextExercise, setNextExercise] = useState(2);

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

			console.log(completedExercises);
			setCompletedExercises(updateCompleted);
		}
		// Decrement the completedExercise number by 1 if bigger than zero
		if (!isCompleted && completedExercises > 0) {
			let updateCompleted = completedExercises - 1;
			setCompletedExercises(updateCompleted);
		}

	}, [isCompleted]);

	 const handleNext= ()=>{
		
		// console.log(nextExercise)
		
		history.push(`/exercise2`)
		let updateCompleted = completedExercises + 1;
			setCompletedExercises(updateCompleted);
		// let nextPage = nextExercise + 1;
		// setNextExercise(nextPage)
	}

	return (
		<div className="row-line">
			<p className="num2find">{numToFind}</p>

			<Matrix
				selectedCubes={selectedCubes}
				setSelectedCubes={setSelectedCubes}
			/>
			{isCompleted && (
				<div>
					<div className="star-position">
						<Star width={76} height={72} isHighlighted={true} />
					</div>

					<button  type='button' onClick={handleNext}>My button</button>
					<p className="star-number">{numToFind}</p>
					<p className="super">Super!</p>
				</div>
			)}
		</div>
	);
}

export default NumbersExercise;

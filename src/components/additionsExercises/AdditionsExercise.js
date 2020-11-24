/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import NumberContext from '../../numberContext/NumberContext';
import Matrix from "../matrix/Matrix";
import Rectangle from "../rectangle/Rectangle";
import Star from "../star/Star";

import "./additionsExercise.css";

import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import { Fab } from "@material-ui/core";

function AdditionExercise({
  number1 = 5,
  number2 = 3,
  history
}) {
  const {
		completedExercises,
		setCompletedExercises
	} = useContext(NumberContext);

	const [selectedCubes, setSelectedCubes] = useState(0);
	const [isCompleted, setIsCompleted] = useState(false);

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

  const handleNext = () => {
		history.push(`/addition2`);
		let updateCompleted = completedExercises + 1;
		setCompletedExercises(updateCompleted);
		
	};

  return (
    <div className="row-line">
    <div className="column-line">
      <p className="num2find">{number1}</p>
      <Rectangle className="rectangle" selectedNumber={number1} />
      <h2>+</h2>
      <p className="num2find">{number2}</p>
      <Rectangle className="rectangle" selectedNumber={number2} />
      </div>
      <Matrix className="matrix" 
        selectedCubes={selectedCubes}
        setSelectedCubes={setSelectedCubes}
      />
      {isCompleted && (
        <div>
          <div className="star-position">
            <Star width={76} height={72} isHighlighted={true} />
          </div>

          <p className="star-number">{sum}</p>
          <p className="super">Super!</p>
          <div className="next-btn">
					<Fab color="secondary" aria-label="edit">
					<button className="btn btn-link" onClick={handleNext}><ArrowForwardSharpIcon/></button>
					</Fab>
					</div>
        </div>
      )}
    </div>
  );
}

export default AdditionExercise;

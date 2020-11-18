import React from 'react';
import Cube from '../cube/Cube';
import './rectangle.css';

Rectangle.defaultProps = {
	number: 10,
	isHighlighted: false,
};

function Rectangle({ number, selectedNumber, highlightColor, isHighlighted }) {
	// Generate arrays with a list of numbers
	
	// Highlighted numbers
	let highlightedNumbers = [...Array(selectedNumber).keys()];
	
	// Regular numbers
	const remainingNumbers = number - selectedNumber
	let regularNumbers = [...Array(remainingNumbers).keys()];

	return (
		<div className='rectangle'>
			{highlightedNumbers.map((number) => (
				<Cube
					key={number}
					backgroundColor={isHighlighted ? highlightColor : '#000000'}
				/>
			))}
			{regularNumbers.map((number) => (
				<Cube
					key={number}
					backgroundColor={isHighlighted ? highlightColor : '#858585'}
				/>
			))}
		</div>
	);
}

export default Rectangle;

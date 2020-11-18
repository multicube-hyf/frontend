import React from 'react';
import Cube from '../cube/Cube';
import './rectangle.css'

Rectangle.defaultProps = {
    number: 10,
	isHighlighted: false,
};

function Rectangle({number, selectedNumber, highlightColor, isHighlighted }) {
	// Generate an array with a list of number from 1 to number
	const numbers = [...Array(number).keys()];

	return (
		<div 
		   className="rectangle"
		>
			{numbers.map((number) => (
				<Cube
					key={number}
					backgroundColor={isHighlighted ? highlightColor : '#858585'}
				/>
			))}
		</div>
	);
}

export default Rectangle;

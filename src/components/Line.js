import React from 'react';
import Cube from './Cube';

Line.defaultProps = {
	isHighlighted: false,
};

function Line({ number, highlightColor, isHighlighted }) {
	// Generate an array with a list of number from 1 to number
	const numbers = [...Array(parseInt(number)).keys()];

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(10, 2rem [col-start])',
				columnGap: '1rem',
			}}
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

export default Line;

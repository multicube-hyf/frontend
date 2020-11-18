import React from 'react';
import Cube from './Cube';

function Line({ number, backgroundColor }) {
	// Generate an array with a list of number from 1 to number
	const numbers = [...Array(parseInt(number)).keys()];

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(10, 1.7rem [col-start])',
				columnGap: '1rem',
			}}
		>
			{numbers.map((number) => (
				<Cube key={number} backgroundColor={backgroundColor} />
			))}
		</div>
	);
}

export default Line;

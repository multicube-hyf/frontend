import React, { useState } from 'react';
import Cube from '../cube/Cube';

import './matrix.css';

Matrix.defaultProps = {
	number: 10,
	selectedNumber: 0,
};

function Matrix({ selectedNumber, setSelectedNumber }) {
	const [selectedCubes, setSelectedCubes] = useState({});

	// Generate arrays with a list of numbers
	// Highlighted numbers
	let cubeNumbers = [...Array(10).keys()];

	let toggleSelect = (e) => {
		let cubeId = e.target.id;

		// Update the list of selected cubes
		let updateSelected = {
			...selectedCubes,
			[cubeId]: !selectedCubes[cubeId],
		};
		setSelectedCubes(updateSelected);

		// Update the selected cubes number
		let updatedNumber = selectedNumber;

		if (!selectedCubes[cubeId]) {
			updatedNumber++;
		} else {
			updatedNumber--;
		}

		setSelectedNumber(updatedNumber);
	};

	return (
		<div className='matrix'>
			{cubeNumbers.map((number) => (
				<Cube
					key={number}
					id={number}
					backgroundColor={'#c3c3c3'}
					toggleSelect={toggleSelect}
					selected={selectedCubes[number]}
				/>
			))}
		</div>
	);
}

export default Matrix;

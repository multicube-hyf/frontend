import React, { useState } from 'react';

const defaultColors = {
	one: '#858585',
	two: '#858585',
	three: '#858585',
	four: '#858585',
	five: '#858585',
	six: '#858585',
	seven: '#858585',
	eight: '#858585',
	nine: '#858585',
	ten: '#858585',
};

function Help() {
	const [selectionColor, setSelectionColor] = useState({
		...defaultColors,
		one: '#37E445',
	});
	const [currentNumber, setCurrentNumber] = useState('1');

	const handleOne = () => {
		if (selectionColor.one === '#858585') {
			let updatedSelection = { ...defaultColors, one: '#37E445' };
			setSelectionColor(updatedSelection);
			setCurrentNumber('1');
		}
	};

	const handleTwo = (e) => {
		if (selectionColor.two === '#858585') {
			let updatedSelection = {
				...defaultColors,
				two: '#37EBA5',
			};
			setSelectionColor(updatedSelection);
			setCurrentNumber('2');
		}
	};

	return (
		<div>
			<h4 onClick={handleOne} className='one'>
				1
				<div
					style={{ background: selectionColor.one }}
					className='squareOne'
				></div>
			</h4>
			<h4 onClick={handleTwo} className='two'>
				2
				<div
					style={{ background: selectionColor.two }}
					className='squareTwo'
				></div>
				<div
					style={{ background: selectionColor.two }}
					className='squareTwo2'
				></div>
			</h4>

			<div>
				<h2>{currentNumber}</h2>
			</div>
		</div>
	);
}

export default Help;

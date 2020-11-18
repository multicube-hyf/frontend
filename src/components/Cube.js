import React from 'react';

function Cube({backgroundColor}) {
	return (
		<div
			className='cube'
			style={{ background: backgroundColor, width: '2rem', height: '2rem' }}
		></div>
	);
}

export default Cube;

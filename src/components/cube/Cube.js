import React from 'react';
import './cube.css'

function Cube({backgroundColor}) {
	return (
		<div
			id='cube'
			style={{ background: backgroundColor }}
		></div>
	);
}

export default Cube;

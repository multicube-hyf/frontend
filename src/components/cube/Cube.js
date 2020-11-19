import React from 'react';
import './cube.css';

function Cube({ backgroundColor, id, toggleSelect, selected }) {
	return (
		<div
			id={id}
			onClick={toggleSelect}
			className='cube'
			style={{ background: selected?'#137AB4':backgroundColor }}
		></div>
	);
}

export default Cube;

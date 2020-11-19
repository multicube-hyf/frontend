import React, { useState } from 'react';
import Matrix from '../matrix/Matrix';

import './select.css';

function SelectNumbers({ numToFind }) {
	const [selectedNumber, setSelectedNumber] = useState(0);

	return (
		<div className='row-line'>
			<p>Number to find: {numToFind}</p>

			<Matrix selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
  {(numToFind === selectedNumber) && <p>STAR {numToFind}</p>}
		</div>
	);
}

export default SelectNumbers;

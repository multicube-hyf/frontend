//import StarBorderIcon from '@material-ui/icons/StarBorder';
import React, { useState } from 'react';
import Matrix from '../matrix/Matrix';
import Star from '../star/Star';

import './select.css';

function SelectNumbers({ numToFind }) {
	const [selectedNumber, setSelectedNumber] = useState(0);

	return (
		<div className='row-line'>
			<p className='num2find'>{numToFind}</p>

			<Matrix
				selectedNumber={selectedNumber}
				setSelectedNumber={setSelectedNumber}
			/>
			{numToFind === selectedNumber && (
				<div>
					<div className='start-position'>
						<Star />
					</div>

					<p className='star-number'>{numToFind}</p>
					<p className='super'>Super!</p>
				</div>
			)}
		</div>
	);
}

export default SelectNumbers;

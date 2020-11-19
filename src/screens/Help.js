import React, { useState } from 'react';

import InteractivePyramid from '../components/interactive pyramid/InteractivePyramid';
import Rectangle from '../components/rectangle/Rectangle';

function Help() {
	const [selectedNumber, setSelectedNumber] = useState(1);

	return (
		<div>
			<InteractivePyramid setSelectedNumber={setSelectedNumber} />
			<h3 className="selected">{selectedNumber}</h3>
			<Rectangle selectedNumber={selectedNumber} />
		</div>
	);
}

export default Help;

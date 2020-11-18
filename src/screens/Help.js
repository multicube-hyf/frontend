import React, { useState } from 'react';

import Pyramid from '../components/pyramid/Pyramid';
import Rectangle from '../components/rectangle/Rectangle';

function Help() {
	const [selectedNumber, setSelectedNumber] = useState(1);

	return (
		<div>
			<Pyramid setSelectedNumber={setSelectedNumber} />
			<h3>{selectedNumber}</h3>
			<Rectangle selectedNumber={selectedNumber} />
		</div>
	);
}

export default Help;

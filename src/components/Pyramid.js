import React, { useState } from 'react';

import Line from './Line';

function Pyramid() {
	const [isHighlighted, setIsHighlighted] = useState({ one: true });

	const toggleSelect = (e) => {
        // Find the div number to target
		let number = e.currentTarget.dataset.divnum;

		let updatedHighlight = {};

        // If the div is not highlighted, set it to true and the rest to false
		if (!isHighlighted[number]) {
			updatedHighlight = { [number]: !isHighlighted[number] };
		} else {
            // If the div is already highlighted, don't update anything
			updatedHighlight = { ...isHighlighted };
		}

		setIsHighlighted(updatedHighlight);
	};

	return (
		<div>
			<div
				data-divnum='one'
				onClick={toggleSelect}
				className='pyramid-line'
			>
				<h4>1</h4>
				<Line
					number='1'
					highlightColor='#37ECAB'
					isHighlighted={isHighlighted.one}
				/>
			</div>
			<div data-divnum='two' onClick={toggleSelect} className='pyramid-line'>
				<h4>2</h4>
				<Line
					number='2'
					highlightColor='#FCBFE3'
					isHighlighted={isHighlighted.two}
				/>
			</div>
			<div data-divnum='three' onClick={toggleSelect} className='pyramid-line'>
				<h4>3</h4>
				<Line
					number='3'
					highlightColor='#FFCF55'
					isHighlighted={isHighlighted.three}
				/>
			</div>
			<div data-divnum='four' onClick={toggleSelect} className='pyramid-line'>
				<h4>4</h4>
				<Line
					number='4'
					highlightColor='#61ff47'
					isHighlighted={isHighlighted.four}
				/>
			</div>
			<div data-divnum='five' onClick={toggleSelect} className='pyramid-line'>
				<h4>5</h4>
				<Line
					number='5'
					highlightColor='#3918ff'
					isHighlighted={isHighlighted.five}
				/>
			</div>
			<div data-divnum='six' onClick={toggleSelect} className='pyramid-line'>
				<h4>6</h4>
				<Line
					number='6'
					highlightColor='#f89705'
					isHighlighted={isHighlighted.six}
				/>
			</div>
			<div data-divnum='seven' onClick={toggleSelect} className='pyramid-line'>
				<h4>7</h4>
				<Line
					number='7'
					highlightColor='#849fe5'
					isHighlighted={isHighlighted.seven}
				/>
			</div>
			<div data-divnum='eight' onClick={toggleSelect} className='pyramid-line'>
				<h4>8</h4>
				<Line
					number='8'
					highlightColor='#f21212'
					isHighlighted={isHighlighted.eight}
				/>
			</div>
			<div data-divnum='nine' onClick={toggleSelect} className='pyramid-line'>
				<h4>9</h4>
				<Line
					number='9'
					highlightColor='#31e1d7'
					isHighlighted={isHighlighted.nine}
				/>
			</div>
			<div data-divnum='ten' onClick={toggleSelect} className='pyramid-line'>
				<h4>10</h4>
				<Line
					number='10'
					highlightColor='#dc2cb5'
					isHighlighted={isHighlighted.ten}
				/>
			</div>
		</div>
	);
}

export default Pyramid;

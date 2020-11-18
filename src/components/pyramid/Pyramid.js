import React, { useState } from 'react';
import './pyramid.css' 

import Line from '../line/Line';

function Pyramid({setSelectedNumber}) {
	const [isHighlighted, setIsHighlighted] = useState({ one: true });


	const toggleSelect = (e) => {
        // Find the div number to target
		let numstring = e.currentTarget.dataset.divnum;
		 // Find selected number 
		let numnum = parseInt(e.currentTarget.dataset.number)
		console.log(numnum)

		let updatedHighlight = {};

        // If the div is not highlighted, set it to true and the rest to false
		if (!isHighlighted[numstring]) {
			updatedHighlight = { [numstring]: true };
		} else {
            // If the div is already highlighted, don't update anything
			updatedHighlight = { ...isHighlighted };
		}

		setIsHighlighted(updatedHighlight);
		setSelectedNumber(numnum)
	};

	return (
		<div>
			<div
			    data-number='1'
				data-divnum='one'
				onClick={toggleSelect}
				className='pyramid-line'
			>
				<h4 className='h4-line'>1</h4>
				<Line
					number='1'
					highlightColor='#37ECAB'
					isHighlighted={isHighlighted.one}
				/>
			</div>
			<div  data-number='2' data-divnum='two' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>2</h4>
				<Line
					number='2'
					highlightColor='#FCBFE3'
					isHighlighted={isHighlighted.two}
				/>
			</div>
			<div  data-number='3' data-divnum='three' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>3</h4>
				<Line
					number='3'
					highlightColor='#FFCF55'
					isHighlighted={isHighlighted.three}
				/>
			</div>
			<div  data-number='4' data-divnum='four' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>4</h4>
				<Line
					number='4'
					highlightColor='#61ff47'
					isHighlighted={isHighlighted.four}
				/>
			</div>
			<div data-divnum='five' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>5</h4>
				<Line
					number='5'
					highlightColor='#3918ff'
					isHighlighted={isHighlighted.five}
				/>
			</div>
			<div data-divnum='six' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>6</h4>
				<Line
					number='6'
					highlightColor='#f89705'
					isHighlighted={isHighlighted.six}
				/>
			</div>
			<div data-divnum='seven' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>7</h4>
				<Line
					number='7'
					highlightColor='#849fe5'
					isHighlighted={isHighlighted.seven}
				/>
			</div>
			<div data-divnum='eight' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>8</h4>
				<Line
					number='8'
					highlightColor='#f21212'
					isHighlighted={isHighlighted.eight}
				/>
			</div>
			<div data-divnum='nine' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>9</h4>
				<Line
					number='9'
					highlightColor='#31e1d7'
					isHighlighted={isHighlighted.nine}
				/>
			</div>
			<div data-divnum='ten' onClick={toggleSelect} className='pyramid-line'>
				<h4 className='h4-line'>10</h4>
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

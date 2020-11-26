import React from 'react';

import { Link } from 'react-router-dom';

import background from '../assets/images/logoXL.png';
import GetStarted from '../components/help/GetStarted';


function Home() {
	return (
		<div className='Home'>
			<img
				className='backgroundHome'
				src={background}
				alt='people with phones'
			/>
			<h1>
				<Link to='/signin'>Sign-in</Link>
			</h1>
			<Link className="get-started" to='/numbers1'>
				<GetStarted/>
			</Link>
			
		</div>
	);
}

export default Home;

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
			<Link to='/numbers1'>
				<GetStarted/>
			</Link>
			
			<Link className="get-started" to='/signin'>Sign-in</Link>
			
		</div>
	);
}

export default Home;

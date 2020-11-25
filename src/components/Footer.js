import React from 'react';

import Help from '../components/help/Help';

import NextButton from './next button/NextButton';


function Footer({ history }) {
	const handlerHelp = () => {
		history.push('/help/');
	};

	return (
		<div className='footer'>
			
				<button className='btn btn-link' onClick={handlerHelp}>
					<Help/>
				</button>
			
			<NextButton history={history} />
		</div>
	);
}

export default Footer;

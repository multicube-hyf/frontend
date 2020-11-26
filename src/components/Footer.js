import React from 'react';
import HelpModal from '../screens/HelpModal';

import NextButton from './next button/NextButton';


function Footer({ history }) {


	return (
		<div className='footer'>
			
		<HelpModal/>
		<NextButton history={history} />
		</div>
	);
}

export default Footer;

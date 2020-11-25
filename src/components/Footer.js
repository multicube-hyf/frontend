import React from 'react';
// import { useHistory } from 'react-router-dom';
import Help from '../components/help/Help';
import { Fab } from '@material-ui/core';
import NextButton from './next button/NextButton';

function Footer({ history }) {
	const handlerHelp = () => {
		history.push('/help/');
	};

	return (
		<div className='footer'>
			<Fab color='secondary' aria-label='edit'>
				<button className='btn btn-link' onClick={handlerHelp}>
					<Help />
				</button>
			</Fab>
      <NextButton history={history} />
		</div>
	);
}

export default Footer;

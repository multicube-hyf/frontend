import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './screens/Home';
import AuthContext from './auth/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './screens/Register';
import SignIn from './screens/SignIn';
import Profile from './screens/Profile';
import Help from './screens/Help';
import Learn1to10 from './screens/Learn1to10';
//import SelectExercise from './components/selectExercise/SelectExercise';
import Exercise1 from './screens/Exercise1';
import Addition1 from './screens/Addition1';

function App() {
	const [userData, setUserData] = React.useState({
		token: undefined,
		user: undefined,
	});
	return (
		<div className='App'>
			<BrowserRouter>
				<AuthContext.Provider value={{ userData, setUserData }}>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/help' component={Help} />
						<Route exact path='/signin' component={SignIn} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/profile' component={Profile} />
						<Route exact path='/learn1to10' component={Learn1to10} />
						<Route exact path='/exercise' component={Exercise1} />
						<Route exact path='/addition' component={Addition1} />
						
					</Switch>
					<Footer/>
				</AuthContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;

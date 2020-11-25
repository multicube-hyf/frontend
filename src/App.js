import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './screens/Home';
import AuthContext from './auth/AuthContext';
import NumberContext from './numberContext/NumberContext';
import Header from './components/Header';

import Register from './screens/Register';
import SignIn from './screens/SignIn';
import Profile from './screens/Profile';
import Help from './screens/Help';
import Learn1to10 from './screens/Learn1to10';

import Exercise1 from './screens/Exercise1';
import Exercise2 from './screens/Exercise2';
import Exercise3 from './screens/Exercise3';

import Addition1 from './screens/Addition1';
import Addition2 from './screens/Addition2';
import Addition3 from './screens/Addition3';

function App() {
	const [userData, setUserData] = React.useState({
		token: undefined,
		user: undefined,
	});

	const numberOfExercises = 3;

	const [completedExercises, setCompletedExercises] = React.useState(0);
	const [isCompleted, setIsCompleted] = React.useState(false);
	return (
		<div className='App'>
			<BrowserRouter>
				<AuthContext.Provider value={{ userData, setUserData }}>
					<NumberContext.Provider
						value={{
							completedExercises,
							setCompletedExercises,
							numberOfExercises,
							isCompleted,
							setIsCompleted,
						}}
					>
						<Header />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/help' component={Help} />
							<Route exact path='/signin' component={SignIn} />
							<Route
								exact
								path='/register'
								component={Register}
							/>
							<Route exact path='/profile' component={Profile} />
							<Route
								exact
								path='/learn1to10'
								component={Learn1to10}
							/>
							<Route
								exact
								path='/exercise'
								component={Exercise1}
							/>
							<Route
								exact
								path='/exercise2'
								component={Exercise2}
							/>
							<Route
								exact
								path='/exercise3'
								component={Exercise3}
							/>
							<Route
								exact
								path='/addition'
								component={Addition1}
							/>
							<Route
								exact
								path='/addition2'
								component={Addition2}
							/>
							<Route
								exact
								path='/addition3'
								component={Addition3}
							/>
						</Switch>
					</NumberContext.Provider>
				</AuthContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;

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

import Numbers1 from './screens/Numbers1';
import Numbers2 from './screens/Numbers2';
import Numbers3 from './screens/Numbers3';

import Addition1 from './screens/Addition1';
import Addition2 from './screens/Addition2';
import Addition3 from './screens/Addition3';

function App() {
	const [userData, setUserData] = React.useState({
		token: undefined,
		user: undefined,
	});

	const [numberOfExercises, setNumberOfExercises] = React.useState(3);

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
							setNumberOfExercises,
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
								path='/numbers1'
								component={Numbers1}
							/>
							<Route
								exact
								path='/numbers2'
								component={Numbers2}
							/>
							<Route
								exact
								path='/numbers3'
								component={Numbers3}
							/>
							<Route
								exact
								path='/addition1'
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

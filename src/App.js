import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import AuthContext from './auth/AuthContext';
import Header from './layout/Header';
import Register from './screens/Register';
import SignIn from './screens/SignIn';
import Profile from './screens/Profile';
import Help from './screens/Help';

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
					</Switch>
				</AuthContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;

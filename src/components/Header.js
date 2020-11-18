import React from 'react';
import { Navbar, Nav, NavDropdown, Media } from 'react-bootstrap';

import logo from '../assets/images/logo.png';

import AuthContext from '../auth/AuthContext';

function Header() {
	const { userData, setUserData } = React.useContext(AuthContext);

	const handleSignout = () => {
		setUserData({
			token: undefined,
			user: undefined,
		});
		localStorage.setItem('auth-token', JSON.stringify(null));
		document.location.href = '/signin';
	};

	return (
		<div>
			<Navbar id='navigationBar' collapseOnSelect expand='lg'>
				<Media>
					<img id='logoImg' src={logo} alt='logo' />
				</Media>
				<Navbar.Brand id='title' href='/'>
					Multi Cube
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className=''>
					<Nav className='mr-3'>
						{userData.user ? (
							<NavDropdown
								title='Welcome {userData.name}'
								id='basic-nav-dropdown'
							>
								<NavDropdown.Item href='/profile'>
									Profile
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='/class'>
									Classroom
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item onClick={handleSignout}>
									Sign Out
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<Nav.Link href='/signin'>Sign In</Nav.Link>
						)}
						{userData.user && userData.isAdmin && (
							<NavDropdown
								title={userData.name}
								id='basic-nav-dropdown'
							>
								<NavDropdown.Item href='/admin'>
									Admin Board
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='/register'>
									Register
								</NavDropdown.Item>
								<NavDropdown.Divider />

								<NavDropdown.Item href='/users'>
									Users
								</NavDropdown.Item>
								<NavDropdown.Divider />

								<NavDropdown.Item onClick={handleSignout}>
									Sign Out
								</NavDropdown.Item>
							</NavDropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;

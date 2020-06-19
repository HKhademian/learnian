import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Button, } from 'react-bootstrap';

import Login from '../Login/Login';

import './App.scss';

function App() {
	return (
		<div className="App">

			<header className=" ">
				<div className="navbar navbar-light bg-light bg-white  d-flex flex-column flex-md-row p-3 px-md-4 mb-3  align-items-center border-bottom shadow-sm">
					<a className="navbar-brand" href="/">Learnian</a>
					<nav className="my-2 my-md-0 mr-md-3">
							<a className="p-2 text-dark" href="#">Features</a>
							<Nav.Link href="/login">Login</Nav.Link>
					</nav>
				</div>
			</header>

			<div className="container-fluid">
				<Login />
			</div>

		</div>
	);
}

export default App;

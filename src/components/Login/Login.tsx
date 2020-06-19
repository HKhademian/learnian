import React, { useState } from 'react';

import { Form, Button,  } from 'react-bootstrap';

import './Login.scss';

function Login() {
	return (
		<div className="container-fluid">
			<div className="row no-gutter">
				<div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
				<div className="col-md-8 col-lg-6">
					<div className="login d-flex align-items-center py-5">
						<div className="container">
							<div className="row">
								<div className="col-md-9 col-lg-8 mx-auto">
									<h3 className="login-heading mb-4">Welcome back!</h3>
									<Form>

										<Form.Group className="form-label-group">
											<Form.Label>Email address</Form.Label>
											<Form.Control type="email" id="inputEmail" className="form-control" required />
										</Form.Group>

										<Form.Group className="form-label-group">
											<Form.Label>Password</Form.Label>
											<Form.Control type="password" id="inputPassword" className="form-control" required />
										</Form.Group>

										<Form.Group className="custom-control custom-checkbox mb-3">
											<Form.Label>Remember password</Form.Label>
											<Form.Control type="checkbox" className="custom-control-input" id="customCheck1" />
										</Form.Group>

										<Button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</Button>

										<div className="text-center">
											<a className="small" href="#">Forgot password?</a>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Login;

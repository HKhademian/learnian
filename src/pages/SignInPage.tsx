/// SOURCE: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up

import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Copyright } from '../components';


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export const SignInPage = () => {
	const history = useHistory();
	const classes = useStyles();

	const onClickSignIn = () => { };
	const onClickSignUp = () => history.replace('/signup');
	const onClickBack = () => history.goBack();

	return (<>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
        </Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="rememmberMe" color="primary" />}
								label="I trust this PC, Remember me."
							/>
						</Grid>
					</Grid>
					<Button onClick={onClickSignIn} // type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					> Sign In
          </Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link onClick={onClickSignUp} variant="body2">
								Don't have an account? Sign Up
              </Link>
						</Grid>
					</Grid>
					<Button onClick={onClickBack}
						fullWidth
						variant="outlined"
						color="secondary"
					> Back
          </Button>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	</>);
}

import React from 'react';
import { Box } from '@mui/material';
import Email from './Input/Email';
import Password from './Input/Password';
import SignUp from './Button/SignUp';

const SignUpDetails = (context) =>
	<Box className="signUpDetails">
		<h2 className="signUpLabel">SIGN UP</h2>
		<label className="emailLabel">EMAIL :</label><Email { ...context }/>
		<label className="passwordLabel">PASSWORD  :</label>
		<Password { ...context }/>
		<SignUp { ...context }/>
	</Box>;

export default SignUpDetails;

import { Box, Button } from '@mui/material';
import React from 'react';

const SignUp = () =>
	<Box>
		<Button
			className="signUpPageButton"
			variant="contained"
			color="error"
		> SignUp </Button>
		<h3 className="singUpLabel">Already have an account ?</h3>
	</Box>;

export default SignUp;

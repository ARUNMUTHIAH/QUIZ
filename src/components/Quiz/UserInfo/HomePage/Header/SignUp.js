import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = (context) => {
	const { setState } = context;

	return <Box className="signUp">
		<Link to="/SignUp">
			<Button
				variant="contained"
				color="error"
				onClick={ () => setState((prevState) => {
					const { state: { signUp }} = context;

					return {
						...prevState,
						signUp: !signUp,
					};
				}) }
			>
				SignUp
			</Button>
		</Link>
	</Box>;
};

export default SignUp;

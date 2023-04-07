import { Box } from '@mui/material';
import React from 'react';

const Start = (context) => {
	const { setState } = context;

	return (
		<Box
			className="userButton"
			onClick={ () => setState((state) => ({
				...state,
				role: 'start',
			})) }
		>
			START
		</Box>);
};

export default Start;

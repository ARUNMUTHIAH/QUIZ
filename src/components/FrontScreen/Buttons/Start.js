import { Box } from '@mui/material';
import React from 'react';

const Start = (context) => {
	const { setState } = context;

	return (
		<Box
			className="userButton"
			onClick={ () => setState((state) => ({
				...state,
				role: 'user',
			})) }
		>START</Box>);
};

export default Start;

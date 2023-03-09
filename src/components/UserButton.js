import { Box } from '@mui/material';
import React from 'react';

const UserButton = (context) => {
	const { setState } = context;

	return (
		<Box
			className="userButton"
			onClick={ () => setState((state) => ({
				...state,
				user: true,
				owner: false,
			})) }
		>START</Box>);
};

export default UserButton;

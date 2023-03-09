import { Box } from '@mui/material';
import React from 'react';

const OwnerButton = (context) => {
	const { setState } = context;

	return (
		<Box
			className="ownerButton"
			onClick={ () => setState((state) => ({
				...state,
				owner: true,
				user: false,
			})) }
		>CREATE</Box>);
};

export default OwnerButton;

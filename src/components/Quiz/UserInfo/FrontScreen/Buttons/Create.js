import { Box } from '@mui/material';
import React from 'react';

const Create = (context) => {
	const { setState } = context;

	return (
		<Box
			className="ownerButton"
			onClick={ () => setState((state) => ({
				...state,
				role: 'create',
			})) }
		>
			CREATE
		</Box>);
};

export default Create;

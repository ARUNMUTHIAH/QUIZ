import { Box } from '@mui/material';
import React from 'react';

const Create = (context) => {
	const { setState } = context;

	return (
		<Box
			className="ownerButton"
			onClick={ () => setState((prevState) => ({
				...prevState,
				role: 'create',
			})) }
		>
			CREATE
		</Box>);
};

export default Create;

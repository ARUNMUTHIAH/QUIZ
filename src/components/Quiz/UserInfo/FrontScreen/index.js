import React from 'react';
import { Box } from '@mui/material';
import Action from './Actions';
import Buttons from './Buttons';

const FrontScreen = (context) => {
	const { state: { role }} = context;

	return (
		<Box>
			{role === ''
				? <Action { ...context }/>
				: <Buttons { ...context }/>}
		</Box>
	);
};

export default FrontScreen;

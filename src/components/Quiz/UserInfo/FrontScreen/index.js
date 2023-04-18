import React from 'react';
import { Box } from '@mui/material';
import Action from './Actions';
import SelectedComponents from './SelectedComponents';

const FrontScreen = (context) => {
	const { state: { role }} = context;

	return (
		<Box>
			{role === ''
				? <Action { ...context }/>
				: <SelectedComponents { ...context }/>}
		</Box>
	);
};

export default FrontScreen;

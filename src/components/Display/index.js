import React from 'react';
import { Box } from '@mui/material';
import FinalScreen from './FinalScreen';
import Quiz from './Quiz';

const Display = (context) => {
	const { state: { isEnd }} = context;

	return (
		<Box>
			{isEnd
				? <FinalScreen { ...context }/>
				: <Quiz { ...context }/>}
		</Box>);
};

export default Display;

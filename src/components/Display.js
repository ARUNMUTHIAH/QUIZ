import React from 'react';
import { Box } from '@mui/material';
import FinalScreen from './Display/FinalScreen';
import Quiz from './Display/Quiz';

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

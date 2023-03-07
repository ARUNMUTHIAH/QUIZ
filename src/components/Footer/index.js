import { Box } from '@mui/material';
import React from 'react';
import Finish from './Buttons/Finish';
import Next from './Buttons/Next';

const Action = (context) => {
	const { state: { currentQuestion, userInfo }} = context;

	return <Box className="next">
		{userInfo.length === currentQuestion
			? <Finish { ...context }/>
			: <Next { ...context }/>}
	</Box>;
};

export default Action;

import { Box } from '@mui/material';
import React from 'react';
import QuizManager from '../../../../../services/QuizManager';
import Finish from './Buttons/Finish';
import Next from './Buttons/Next';

const Action = (context) => <Box className="next">
	{QuizManager.ButtonAction(context)
		? <Finish { ...context }/>
		: <Next { ...context }/>}
</Box>;

export default Action;

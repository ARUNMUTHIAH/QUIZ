import React from 'react';
import { Box } from '@mui/material';
import Questions from './Header/Questions';
import Next from './Footer/Next';

const Quiz = (context) =>
	<Box>
		<Questions { ...context }/>
		<Next { ...context }/>
	</Box>;

export default Quiz;

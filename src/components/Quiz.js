import React from 'react';
import { Box } from '@mui/material';
import Questions from './Header/Questions';

const Quiz = (context) =>
	<Box>
		<Questions { ...context }/>
	</Box>;

export default Quiz;

import React from 'react';
import { Box } from '@mui/material';
import Questions from '../Header/Questions';
import Action from '../Footer';

const Quiz = (context) =>
	<Box>
		<Questions { ...context }/>
		<Action { ...context }/>
	</Box>;

export default Quiz;

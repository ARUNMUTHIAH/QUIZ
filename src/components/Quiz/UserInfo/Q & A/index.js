import React from 'react';
import { Box } from '@mui/material';
import Questions from './Header/Questions';
import Action from './Footer';

const QandA = (context) =>
	<Box>
		<Questions { ...context }/>
		<Action { ...context }/>
	</Box>;

export default QandA;

import { Box } from '@mui/material';
import React from 'react';
import QuizManager from '../../../../../services/QuizManager';
import Backward from './Buttons/Backward';
import Finish from './Buttons/Finish';
import Forward from './Buttons/Forward';

const Action = (context) =>
	<Box className="next">
		<Backward { ...context }/>
		{QuizManager.ButtonAction(context)
			? <Finish { ...context }/>
			: <Forward { ...context }/>}
	</Box>;

export default Action;

import { Box, InputLabel } from '@mui/material';
import React from 'react';
import Quiz from './Quiz';

const FrontScreen = (context) =>
	<Box className="frontScreen">
		<InputLabel class="starter"> READY FOR A </InputLabel>
		<Quiz { ...context }/>
	</Box>;

export default FrontScreen;

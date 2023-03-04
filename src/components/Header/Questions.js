import React from 'react';
import { Box, InputLabel } from '@mui/material';
import Options from '../Body/Options';

const Questions = (context) => {
	const { state: { question }} = context;

	return (
		<Box className="outerBorder">
			<InputLabel class="question">{question}</InputLabel>
			<Options { ...context }/>
		</Box>);
};

export default Questions;

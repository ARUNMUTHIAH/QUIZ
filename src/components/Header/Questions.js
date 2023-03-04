import React from 'react';
import { Box, InputLabel } from '@mui/material';

const Questions = (context) => {
	const { state: { question }} = context;

	return (
		<Box className="outerBorder">
			<InputLabel class="question">{question}</InputLabel>
		</Box>);
};

export default Questions;

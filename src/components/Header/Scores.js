import { Box } from '@mui/material';
import React from 'react';

const Scores = (context) => {
	const { state: { score }} = context;

	return <Box>{score}</Box>;
};

export default Scores;

import { Box } from '@mui/material';
import React from 'react';

const Quiz = (context) => {
	const { setState, state } = context;

	return (
		<Box
			className="quiz"
			onClick={ () => setState({
				...state,
				isActive: true,
			}) }
		>
			QUIZ?
		</Box>
	);
};

export default Quiz;

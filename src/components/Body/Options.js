import React from 'react';
import { Box } from '@mui/material';

const Options = (context) => {
	const { state: { userAnswer, currentQuestion },
		config: { quizData },
		setState } = context;

	return (
		<Box>
			{quizData[currentQuestion].options.map((option, key) =>
				<Box
					key={ key }
					{ ...{ className: userAnswer === option
						? 'correctOption'
						: 'option',
					onClick: () => setState((state) => ({
						...state,
						userAnswer: option,
					})) } }
				>{option}</Box>)}
		</Box>);
};

export default Options;

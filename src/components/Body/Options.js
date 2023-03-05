import React from 'react';
import { Box } from '@mui/material';

const Options = (context) => {
	const { state: { options, score, currentQuestion },
		config: { quizData },
		setState } = context;

	return options.map((option, key) =>
		<Box
			key={ key }
			{ ...{ className: 'option',
				onClick: () => setState((state) => ({
					...state,
					userAnswer: option,
					score: option === quizData[currentQuestion - 1].answer
						? score + 1
						: score,
				})) } }
		>{option}</Box>);
};

export default Options;

import React from 'react';
import { Box } from '@mui/material';

const Options = (context) => {
	const { state: { userAnswer, userInfo, currentQuestion }, state,
		setState } = context;

	return (
		<Box>
			{userInfo[currentQuestion].options.map((option, key) =>
				<Box
					key={ key }
					{ ...{ className: userAnswer === option
						? 'correctOption'
						: 'option',
					onClick: () => setState({
						...state,
						userAnswer: option,
					}) } }
				>{option}</Box>)}
		</Box>);
};

export default Options;

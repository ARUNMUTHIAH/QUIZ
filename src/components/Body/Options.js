/* eslint-disable max-len */
import React from 'react';
import { Box } from '@mui/material';

const Options = (context) => {
	const { state: { options, userAnswer },
		setState } = context;

	return (
		<Box>
			{options.map((option, key) =>
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

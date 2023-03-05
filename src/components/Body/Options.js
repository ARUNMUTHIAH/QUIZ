import React from 'react';
import { Box } from '@mui/material';

const Options = (context) => {
	const { state: { options }, setState } = context;

	return options.map((option, key) =>
		<Box
			key={ key }
			{ ...{ className: 'option',
				onClick: () => setState((state) => ({
					...state,
					userAnswer: option,
				})) } }
		>{option}</Box>);
};

export default Options;

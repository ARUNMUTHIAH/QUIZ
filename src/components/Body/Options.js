import React from 'react';
import { Box } from '@mui/material';

const Options = (context) => {
	const { state: { options }} = context;

	return options.map((option, key) =>
		<Box key={ key } className="option">{option}</Box>);
};

export default Options;

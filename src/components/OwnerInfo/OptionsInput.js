import React from 'react';
import { TextField } from '@mui/material';

const OptionsInput = (context) => {
	const { setState, state, state: { Input }} = context;
	const { Input: { options }} = state;

	return (
		<TextField { ...{ placeholder: 'Options',
			onChange: ({ target: { value }}) => setState({
				...state,
				Input: { ...Input, options: [...options, value] },
			}) } }
		/>
	);
};

export default OptionsInput;

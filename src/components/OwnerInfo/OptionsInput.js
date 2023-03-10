import React from 'react';
import { Box, TextField } from '@mui/material';
import OptionAdd from '../OptionAdd';

const OptionsInput = (context) => {
	const { setState, state } = context;
	const { option } = state;

	return (
		<Box>
			<TextField { ...{
				placeholder: 'Options',
				value: option,
				onChange: ({ target: { value }}) => setState({
					...state,
					option: value,
				}),
			} }
			/>
			<OptionAdd { ...context }/>
		</Box>
	);
};

export default OptionsInput;

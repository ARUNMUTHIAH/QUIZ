import React from 'react';
import { TextField } from '@mui/material';

const Answer = (context) => {
	const { setState, state } = context;
	const { input } = state;

	return (
		<TextField { ...{
			placeholder: 'Answer',
			value: input.answer,
			onChange: ({ target: { value }}) => setState({
				...state,
				input: { ...input, answer: value },
			}),
		} }
		/>
	);
};

export default Answer;

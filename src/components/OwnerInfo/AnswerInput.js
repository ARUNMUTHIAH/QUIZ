import React from 'react';
import { TextField } from '@mui/material';

const AnswerInput = (context) => {
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

export default AnswerInput;

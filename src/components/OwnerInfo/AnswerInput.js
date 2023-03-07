import React from 'react';
import { TextField } from '@mui/material';

const AnswerInput = (context) => {
	const { setState, state } = context;
	const { Input } = state;

	return (
		<TextField { ...{ placeholder: 'Answer',
			onChange: ({ target: { value }}) => setState({
				...state,
				Input: { ...Input, answer: value },
			}) } }
		/>
	);
};

export default AnswerInput;

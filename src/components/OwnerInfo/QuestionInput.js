import React from 'react';
import { TextField } from '@mui/material';

const QuestionInput = (context) => {
	const { setState, state } = context;
	const { Input } = state;

	return (
		<TextField { ...{
			placeholder: 'Question',
			onChange: ({ target: { value }}) => setState({
				...state,
				Input: { ...Input, question: value },
			}),
		} }
		/>);
};

export default QuestionInput;

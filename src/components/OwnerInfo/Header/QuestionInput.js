import React from 'react';
import { TextField } from '@mui/material';

const QuestionInput = (context) => {
	const { setState } = context;

	return (
		<TextField { ...{
			placeholder: 'Question',
			onChange: ({ target: { value }}) => setState((state) => ({
				...state,
				questionInput: value,
			})),
		} }
		/>);
};

export default QuestionInput;

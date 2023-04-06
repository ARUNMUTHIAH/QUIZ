import React from 'react';
import { Box, TextField } from '@mui/material';

const Question = (context) => {
	const { setState, state } = context;
	const { input } = state;

	return (
		<Box className="questionInput">
			<TextField
				{ ...{
					placeholder: 'Question',
					value: input.question,
					onChange: ({ target: { value }}) => setState({
						...state,
						input: { ...input, question: value },
					}),
				} }
			/>
		</Box>
	);
};

export default Question;

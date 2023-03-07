/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { Button } from '@mui/material';
import React from 'react';

const AddButton = (context) => {
	const { setState, state, state: { userInfo, ownerInfo }} = context;
	const { Input } = state;
	const { ownerInfo: { question, options, answer }} = state;

	return (
		<Button
			onClick={ () => setState({
				...state,
				ownerInfo: [{ question: Input.question, options: Input.options, answer: Input.answer }],
				userInfo: [...userInfo, ownerInfo.map((owner) => owner)],
			}) }
			variant="contained"
			color="primary"
			size="small"
		>
			+
		</Button>
	);
};

export default AddButton;

import { Button } from '@mui/material';
import React from 'react';

const NextCategory = (context) => {
	const { state, state: { currentCategory }, setState } = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			onClick: () => setState({
				...state,
				currentCategory: currentCategory + 1,
				currentQuestion: 0,
			}),
		} }
		>Next</Button>);
};

export default NextCategory;

/* eslint-disable max-len */
import { Button } from '@mui/material';
import React from 'react';

const NextCategory = (context) => {
	const { config: { categories }, setState } = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			onClick: () => setState((prevState) => ({
				...prevState,
				currentCategory: prevState.userInfo[prevState.currentCategory].id + 1,
				currentQuestion: 0,
				userInfo: categories,
				userAnswer: '',
			})),
		} }
		>Next</Button>);
};

export default NextCategory;

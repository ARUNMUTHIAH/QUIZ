/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Button } from '@mui/material';

const NextCategory = (context) => {
	const { config: { categories }, setState } = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			onClick: () => setState((prevState) => {
				const { userInfo } = prevState;

				return {
					...prevState,
					currentCategory: userInfo[prevState.currentCategory].id + 1,
					currentQuestion: 0,
					userInfo: categories,
					userAnswer: '',
					score: 0,
				};
			}),
		} }
		>Next</Button>);
};

export default NextCategory;

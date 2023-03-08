import React from 'react';
import { Box } from '@mui/material';
import Play from './Play';
import CategoryImage from './CategoryImage';
import CategoryName from './CategoryName';
import CategoryLogo from './CategoryLogo';
import QuizName from './QuizName';

const MainScreen = (context) => {
	const { config: { categories }} = context;

	return (
		categories.map((category, key) =>
			<Box key={ key } class="categories">
				<CategoryImage { ...{ ...context, data: category } }/>
				<QuizName/>
				<CategoryLogo { ...context }/>
				<CategoryName { ...{ ...context, data: category } }/>
				<Play { ...context }/>
			</Box>));
};

export default MainScreen;

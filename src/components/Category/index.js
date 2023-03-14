import React from 'react';
import { Box } from '@mui/material';
import CategoryImage from './CategoryImage';
import CategoryName from './CategoryName';
import CategoryLogo from './CategoryLogo';
import QuizName from './QuizName';
import Play from './Play';

const MainScreen = (context) => {
	const { config: { categories }} = context;

	return (
		<Box className="container">
			{ categories.map((category, key) =>
				<Box key={ key } class="categories">
					<CategoryImage { ...{ ...context, data: category } }/>
					<QuizName { ...context }/>
					<CategoryLogo { ...context }/>
					<CategoryName { ...{ ...context, data: category } }/>
					<Play { ...{ ...context, data: category } }/>
				</Box>) }
		</Box>);
};

export default MainScreen;

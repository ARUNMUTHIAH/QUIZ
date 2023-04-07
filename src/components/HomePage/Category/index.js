import React from 'react';
import { Box } from '@mui/material';
import Image from './Image';
import Name from './Name';
import Logo from './Logo';
import Play from './Play';

const Categories = (context) => {
	const { config: { categories }} = context;

	return (
		<Box className="container">
			{ categories.map((category, key) =>
				<Box key={ key } class="categories">
					<Image { ...{ ...context, data: category } }/>
					<Logo { ...context }/>
					<Name { ...{ ...context, data: category } }/>
					<Play { ...{ ...context, data: category } }/>
				</Box>) }
		</Box>);
};

export default Categories;

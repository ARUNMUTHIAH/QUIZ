import React from 'react';
import { Box } from '@mui/material';
import Image from './Image';
import Name from './Name';
import Logo from './Logo';
import Play from './Play';

const Categories = (context) => {
	const { state: { userInfo }} = context;

	return (
		<Box className="container">
			{ userInfo.map((category, key) =>
				<Box key={ key } className="categories">
					<Image { ...{ ...context, data: category } }/>
					<Logo { ...context }/>
					<Name { ...{ ...context, data: category } }/>
					<Play { ...{ ...context, data: category } }/>
				</Box>) }
		</Box>
	);
};

export default Categories;

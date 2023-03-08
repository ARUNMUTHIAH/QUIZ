import React from 'react';
import { Box } from '@mui/material';

const CategoryName = (context) => {
	const { data: category } = context;

	return <Box className="categoryName">{category.name}</Box>;
};

export default CategoryName;

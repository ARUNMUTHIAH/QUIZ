import React from 'react';
import { Box } from '@mui/material';

const Name = (context) => {
	const { data: category } = context;

	return <Box className="categoryName">{category.name}</Box>;
};

export default Name;

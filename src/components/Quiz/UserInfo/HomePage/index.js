import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Categories from './Category';

const HomePage = (context) =>
	<Box>
		<Header { ...context }/>
		<Banner { ...context }/>
		<Categories { ...context }/>
	</Box>;

export default HomePage;

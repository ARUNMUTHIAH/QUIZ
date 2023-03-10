import { Box } from '@mui/material';
import React from 'react';
import Header from '../Quiz/Header';
import Banner from '../Banner';
import MainScreen from '../Category';

const HomePage = (context) =>
	<Box className="homePage">
		<Header { ...context }/>
		<Banner { ...context }/>
		<MainScreen { ...context }/>
	</Box>;

export default HomePage;

/* eslint-disable max-len */
import './App.scss';
import { React } from 'react';
import Quiz from './components/Quiz';
import { Box } from '@mui/material';

const App = (context) =>
	<Box className="App">
		<Quiz { ...context }/>
	</Box>;

export default App;

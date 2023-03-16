import { React } from 'react';
import './App.scss';
import Quiz from './components/Quiz';
import { Box } from '@mui/material';

const App = (context) =>
	<Box className="App">
		<Quiz { ...context }/>
	</Box>;

export default App;

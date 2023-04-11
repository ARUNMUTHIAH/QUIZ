import { React } from 'react';
import './App.scss';
import Quiz from './components/Quiz';
import { Box } from '@mui/material';
import { peek } from '@laufire/utils/debug';

const App = (context) => {
	const { state: { userInfo }} = context;

	peek(userInfo);
	return <Box className="App">
		<Quiz { ...context }/>
	</Box>;
};

export default App;

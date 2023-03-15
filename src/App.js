/* eslint-disable max-len */
import './App.scss';
import { React, useState } from 'react';
import Quiz from './components/Quiz';
import { Box } from '@mui/material';

const initialState = (context) => {
	const { config: { inputData, categories }} = context;

	return {
		currentQuestion: 0,
		currentCategory: 0,
		userAnswer: null,
		userInfo: categories,
		option: '',
		input: inputData,
		score: 0,
		user: false,
		owner: false,
		isActive: false,
		isPlay: false,
		isNext: false,
		isFinish: false,
	};
};

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return <Box className="App">
		<Quiz { ...extendedContext }/>
	</Box>;
};

export default App;

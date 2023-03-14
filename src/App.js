import './App.scss';
import { React, useState } from 'react';
import WelcomePage from './components/Theme';

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
		user: true,
		owner: false,
		isActive: true,
		isPlay: false,
	};
};

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<WelcomePage { ...extendedContext }/>
	</div>;
};

export default App;

import './App.scss';
import { React, useState } from 'react';
import WelcomePage from './components/Theme';

const initialState = (context) => {
	const { config: { categories }} = context;

	return {
		currentQuestion: 0,
		currentCategory: 0,
		userAnswer: null,
		userInfo: categories,
		Input: { question: '', options: [], answer: '' },
		score: 0,
		user: false,
		owner: false,
		isActive: false,
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

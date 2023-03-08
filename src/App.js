import { React, useState } from 'react';
import './App.scss';
import Header from './components/Quiz/Header';

const initialState = (context) => {
	const { config: { quizData }} = context;

	return {
		currentQuestion: 0,
		userAnswer: null,
		userInfo: quizData,
		Input: { question: '', options: [], answer: '' },
		score: 0,
		user: false,
		owner: false,
	};
};

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Header { ...extendedContext }/>
	</div>;
};

export default App;

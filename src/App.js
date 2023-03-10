import './App.scss';
import { React, useState } from 'react';
import WelcomePage from './components/Theme';

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
		isActive: false,
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

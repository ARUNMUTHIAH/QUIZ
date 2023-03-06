import { React, useState } from 'react';
import './App.scss';
import Display from './components/Display';

const initialState = {
	currentQuestion: 1,
	question: 'Which of the following is not a Javascript framework?',
	options: ['Node', 'Vue', 'Flutter'],
	userAnswer: null,
	score: 0,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Display { ...extendedContext }/>
	</div>;
};

export default App;

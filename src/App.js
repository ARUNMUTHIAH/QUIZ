import { React, useState } from 'react';
import './App.scss';
import OwnerAction from './components/OwnerAction';
import UserAction from './components/UserAction';

const initialState = {
	currentQuestion: 0,
	userAnswer: null,
	Input: { question: '', options: [], answer: '' },
	ownerInfo: [{ question: '', options: [], answer: '' }],
	score: 0,
	user: false,
	owner: false,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<UserAction { ...extendedContext }/>
		<OwnerAction { ...extendedContext }/>
	</div>;
};

export default App;

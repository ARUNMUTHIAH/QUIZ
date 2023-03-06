import { React, useState } from 'react';
import './App.scss';
import UserAction from './components/UserAction';

const initialState = {
	currentQuestion: 0,
	userAnswer: null,
	score: 0,
	user: false,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<UserAction { ...extendedContext }/>
	</div>;
};

export default App;

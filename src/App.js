import { React, useState } from 'react';
import './App.scss';
import Quiz from './components/Quiz';

const initialState = {
	question: 'Which of the following is not a Javascript framework?',
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Quiz { ...extendedContext }/>
	</div>;
};

export default App;

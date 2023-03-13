import React from 'react';
import Display from '../Display';
import HomePage from '../HomePage';

const PlayButtonAction = (context) => {
	const { state: { isPlay }} = context;

	return !isPlay
		? <HomePage { ...context }/>
		: <Display { ...context }/>;
};

export default PlayButtonAction;

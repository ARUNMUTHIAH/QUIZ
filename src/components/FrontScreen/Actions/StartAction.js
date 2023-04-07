import React from 'react';
import PlayAction from '../../HomePage/Category/PlayAction';
import Start from '../Buttons/Start';

const StartAction = (context) => {
	const { state: { role }} = context;

	return role
		? <PlayAction { ...context }/>
		: <Start { ...context }/>;
};

export default StartAction;

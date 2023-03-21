import React from 'react';
import PlayButtonAction from './Category/PlayButtonAction';
import UserButton from './UserButton';

const UserAction = (context) => {
	const { state: { role }} = context;

	return role
		? <PlayButtonAction { ...context }/>
		: <UserButton { ...context }/>;
};

export default UserAction;

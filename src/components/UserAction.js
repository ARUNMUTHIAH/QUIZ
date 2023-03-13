import React from 'react';
import PlayButtonAction from './Category/PlayButtonAction';
import UserButton from './UserButton';

const UserAction = (context) => {
	const { state: { user }} = context;

	return user
		? <PlayButtonAction { ...context }/>
		: <UserButton { ...context }/>;
};

export default UserAction;

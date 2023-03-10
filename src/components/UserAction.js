import React from 'react';
import HomePage from './HomePage';
import UserButton from './UserButton';

const UserAction = (context) => {
	const { state: { user }} = context;

	return user
		? <HomePage { ...context }/>
		: <UserButton { ...context }/>;
};

export default UserAction;

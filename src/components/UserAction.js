import React from 'react';
import Display from './Display';
import UserButton from './UserButton';

const UserAction = (context) => {
	const { state: { user }} = context;

	return user
		? <Display { ...context }/>
		: <UserButton { ...context }/>;
};

export default UserAction;

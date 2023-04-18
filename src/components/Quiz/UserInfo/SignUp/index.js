import React from 'react';
import SignUpDetails from './SignUpDetails';

const SignUpAction = (context) => {
	const { state: { signUp }} = context;

	return signUp && <SignUpDetails { ...context }/>;
};

export default SignUpAction;

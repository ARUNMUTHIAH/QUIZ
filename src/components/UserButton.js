import { Button } from '@mui/material';
import React from 'react';

const UserButton = (context) => {
	const { setState } = context;

	return (
		<Button
			{ ...{
				variant: 'contained',
			} }
			onClick={ () => setState((state) => ({
				...state,
				user: true,
			})) }
		>USER</Button>);
};

export default UserButton;

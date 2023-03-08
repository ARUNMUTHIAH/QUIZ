import { Button } from '@mui/material';
import React from 'react';

const UserButton = (context) => {
	const { setState } = context;

	return (
		<Button
			{ ...{
				variant: 'outlined',
				class: 'userButton',
			} }
			onClick={ () => setState((state) => ({
				...state,
				user: true,
				owner: false,
			})) }
		>USER</Button>);
};

export default UserButton;

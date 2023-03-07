import { Button } from '@mui/material';
import React from 'react';

const OwnerButton = (context) => {
	const { setState } = context;

	return (
		<Button
			{ ...{
				variant: 'contained',
			} }
			onClick={ () => setState((state) => ({
				...state,
				owner: true,
				user: false,
			})) }
		>OWNER</Button>);
};

export default OwnerButton;

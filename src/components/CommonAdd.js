import { peek } from '@laufire/utils/debug';
import { Button } from '@mui/material';
import React from 'react';

const CommonAdd = (context) => {
	const { setState, state, state: { userInfo }} = context;
	const { Input } = state;

	return (
		<Button
			variant="contained"
			onClick={ () => setState({ ...state,
				userInfo: peek([...userInfo, Input]) }) }
		>
			+
		</Button>
	);
};

export default CommonAdd;

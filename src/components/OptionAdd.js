import { peek } from '@laufire/utils/debug';
import { Button } from '@mui/material';
import React from 'react';

const OptionAdd = (context) => {
	const { state, setState, config } = context;
	const { input, input: { options }, option } = state;

	return (
		<Button
			onClick={ () => setState({
				...state,
				input: { ...input, options: peek([...options, option]) },
				option: config.inputData.options,
			}) }
		>Add
		</Button>);
}
;

export default OptionAdd;

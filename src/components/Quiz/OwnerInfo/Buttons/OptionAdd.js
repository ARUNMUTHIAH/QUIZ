import { Button } from '@mui/material';
import React from 'react';

const OptionAdd = (context) => {
	const { state, setState, config } = context;
	const { input, input: { options }, option } = state;

	return (
		<Button
			className="optionAdd"
			variant="contained"
			size="large"
			onClick={ () => setState({
				...state,
				input: { ...input, options: [...options, option] },
				option: config.inputData.options,
			}) }
		> +
		</Button>);
}
;

export default OptionAdd;

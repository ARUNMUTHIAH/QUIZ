import { Box } from '@mui/material';
import React from 'react';
import AnswerInput from './AnswerInput';
import OptionsInput from './OptionsInput';
import QuestionInput from './QuestionInput';

const Inputs = (context) =>
	<Box>
		<QuestionInput { ...context }/>
		<OptionsInput { ...context }/>
		<AnswerInput { ...context }/>
	</Box>;

export default Inputs;

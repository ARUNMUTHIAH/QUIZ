import { Box } from '@mui/material';
import React from 'react';
import CommonAdd from '../CommonAdd';
import AnswerInput from './AnswerInput';
import OptionsInput from './OptionsInput';
import QuestionInput from './QuestionInput';

const Inputs = (context) =>
	<Box>
		<QuestionInput { ...context }/>
		<OptionsInput { ...context }/>
		<AnswerInput { ...context }/>
		<CommonAdd { ...context }/>
	</Box>;

export default Inputs;

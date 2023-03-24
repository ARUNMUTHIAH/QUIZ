import { Box } from '@mui/material';
import React from 'react';
import CommonAdd from '../CommonAdd';
import UserButton from '../UserButton';
import Answer from './Answer';
import Options from './Options';
import Question from './Question';

const OwnerInputs = (context) =>
	<Box>
		<Question { ...context }/>
		<Options { ...context }/>
		<Answer { ...context }/>
		<CommonAdd { ...context }/>
		<UserButton { ...context }/>
	</Box>;

export default OwnerInputs;

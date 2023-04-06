import { Box } from '@mui/material';
import React from 'react';
import CommonAdd from '../CommonAdd';
import UserButton from '../UserButton';
import Answer from './Answer';
import CategoriesList from './CategoriesList';
import Options from './Options';
import Question from './Question';

const OwnerInputs = (context) =>
	<Box className="ownerInputs">
		<Question { ...context }/>
		<Options { ...context }/>
		<Answer { ...context }/>
		<CommonAdd { ...context }/>
		<CategoriesList { ...context }/>
		<UserButton { ...context }/>
	</Box>;

export default OwnerInputs;

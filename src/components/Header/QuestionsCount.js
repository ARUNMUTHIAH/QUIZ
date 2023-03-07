import { Box } from '@mui/material';
import React from 'react';

const QuestionsCount = (context) => {
	const { state: { currentQuestion, userInfo }} = context;

	return (
		<Box className="question">
			Questions {currentQuestion}  out of {userInfo.length}
		</Box>);
};

export default QuestionsCount;

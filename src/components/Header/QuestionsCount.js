import React from 'react';

const QuestionsCount = (context) => {
	const { state: { currentQuestion, userInfo, currentCategory }} = context;

	return (
		<h1>
			Questions {currentQuestion + 1}
			out of {userInfo[currentCategory].quizData.length}
		</h1>);
};

export default QuestionsCount;

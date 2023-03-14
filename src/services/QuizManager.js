/* eslint-disable no-magic-numbers */

import { peek } from '@laufire/utils/debug';

/* eslint-disable max-len */
const updateScore = (context) => {
	const { state: { score, currentQuestion, userAnswer, userInfo, currentCategory }} = context;

	return peek(userAnswer) === peek(userInfo[currentCategory].quizData[currentQuestion].answer)
		? score + 1
		: score;
};

const isChecked = (context) => {
	const { state: { input: { options }}} = context;

	return options.length !== 3;
};

const ButtonAction = (context) => {
	const { state: { userInfo, currentCategory, currentQuestion }} = context;

	return userInfo[currentCategory].quizData.length === currentQuestion + 1;
};

const QuizManager = {
	updateScore,
	isChecked,
	ButtonAction,
};

export default QuizManager;

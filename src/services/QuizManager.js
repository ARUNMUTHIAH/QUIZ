/* eslint-disable no-magic-numbers */
const updateScore = (context) => {
	const { state: { score, currentQuestion, userAnswer, userInfo }} = context;

	return userAnswer === userInfo[currentQuestion].answer
		? score + 1
		: score;
};

const isChecked = (context) => {
	const { state: { input: { options }}} = context;

	return options.length !== 3;
};

const QuizManager = {
	updateScore,
	isChecked,
};

export default QuizManager;

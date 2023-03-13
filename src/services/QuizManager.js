/* eslint-disable max-len */
const updateScore = (context) => {
	const { state: { score, currentQuestion, userAnswer, userInfo, currentCategory }} = context;

	return userAnswer === userInfo[currentCategory].quizData[currentQuestion].answer
		? score + 1
		: score;
};

const ButtonAction = (context) => {
	const { state: { userInfo, currentCategory, currentQuestion }} = context;

	return userInfo[currentCategory].quizData.length === currentQuestion + 1;
};

const QuizManager = {
	updateScore,
	ButtonAction,
};

export default QuizManager;

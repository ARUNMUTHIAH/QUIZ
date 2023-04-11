const updateScore = (context) => {
	const { state: { score, currentQuestion, userAnswer,
		userInfo, currentCategory }} = context;

	return userAnswer === userInfo[currentCategory]
		.quizData[currentQuestion].answer
		? score + 1
		: score;
};

const isChecked = (context) => {
	const { state: { input: { options }}, config: { optionCount }} = context;

	return options.length !== optionCount;
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

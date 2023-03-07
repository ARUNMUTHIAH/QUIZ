const updateScore = (context) => {
	const { state: { score, currentQuestion, userAnswer, userInfo }} = context;

	return userAnswer === userInfo[currentQuestion].answer
		? score + 1
		: score;
};

const QuizManager = {
	updateScore,
};

export default QuizManager;

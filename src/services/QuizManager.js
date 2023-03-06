const updateScore = (context) => {
	const { state: { score, currentQuestion, userAnswer },
		config: { quizData }} = context;

	return userAnswer === quizData[currentQuestion].answer
		? score + 1
		: score;
};

const QuizManager = {
	updateScore,
};

export default QuizManager;

import config from './config';

const seed = {
	currentQuestion: 0,
	currentCategory: 0,
	userAnswer: null,
	userInfo: config.categories,
	option: '',
	input: config.inputData,
	score: 0,
	user: false,
	owner: false,
	isActive: false,
	isPlay: false,
	isNext: false,
	isFinish: false,
};

export default seed;

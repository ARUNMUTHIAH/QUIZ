import config from './config';

const seed = {
	currentQuestion: 0,
	currentCategory: 0,
	userAnswer: null,
	userInfo: config.categories,
	categoriesData: config.categories,
	option: '',
	input: config.inputData,
	score: 0,
	isPlay: false,
	isNext: false,
	isFinish: false,
	role: '',
	dropDownList: '',
};

export default seed;

const pinyin = require('pinyin');
const changeCase = require('change-case');

const config = {
	style: pinyin.STYLE_FIRST_LETTER, // 设置拼音风格
	heteronym: false // 启用多音字模式
};

module.exports = function (pArray, options) {
	return pArray.reduce((acc, cur) => {
		const arr = [options.prefix, ...pinyin(cur, config), options.suffix];
		const ori = arr.flat().join(' ');
		acc[cur] = changeCase[options.style](ori);
		return acc;
	}, {});
};

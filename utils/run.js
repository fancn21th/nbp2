// const { dim, italic, bold, yellow } = require('chalk');
const ora = require('ora');
const fs = require('fs');
const path = require('path');
const pinyin = require('pinyin');

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const config = {
	style: pinyin.STYLE_FIRST_LETTER, // 设置拼音风格
	heteronym: true
};

module.exports = async function () {
	const spinner = ora({
		text: '转换准备开始'
	});

	spinner.start();

	try {
		const filePath = path.join(process.cwd(), 'input.json');

		fs.readFile(filePath, 'utf8', function (err, data) {
			if (err) throw err;
			const input = JSON.parse(data);
			const output = input.reduce((acc, cur) => {
				const arr = pinyin(cur, config);
				acc[cur] = arr.flat().join('-');
				return acc;
			}, {});
			console.log(output);
		});
	} catch (error) {
		spinner.fail(error.message);
		process.exit(1);
	}

	spinner.stop();
};

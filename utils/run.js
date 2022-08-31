const { dim, italic, bold, blue, bgBlue } = require('chalk');
const ora = require('ora');
const fs = require('fs');
const path = require('path');
const p2map = require('./p2map');

module.exports = async function (flags) {
	const spinner = ora({
		text: '转换准备开始'
	});

	console.log(
		blue(
			`支持以下 Case Style
camelCase[testString], constantCase[TEST_STRING], dotCase[test.string], paramCase[test-string], pascalCase[TestString], snakeCase[test_string]`
		)
	);

	console.log(bgBlue(`当前配置是 -s=${flags.style}`));

	spinner.start();

	try {
		const filePath = path.join(process.cwd(), 'input.json');

		fs.readFile(filePath, 'utf8', function (err, data) {
			if (err) throw err;

			const output = p2map(JSON.parse(data), {
				style: flags.style,
				suffix: flags.suffix,
				prefix: flags.prefix
			});

			if (flags.dryRun) {
				console.log(output);
			}
		});
	} catch (error) {
		spinner.fail(error.message);
		process.exit(1);
	} finally {
		spinner.stop();
		console.log();
		console.log('转换成功');
	}
};

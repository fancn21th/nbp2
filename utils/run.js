const { dim, italic, bold, bgRed, blue, bgBlue, bgGreen } = require('chalk');
const ora = require('ora');
const fs = require('fs');
const path = require('path');
const p2map = require('./p2map');

module.exports = async function (flags) {
	const spinner = ora({
		text: '转换准备开始'
	});

	console.log();
	console.log(
		blue(
			`支持以下 Case Style
camelCase     - "testString" 
constantCase  - "TEST_STRING"
dotCase       - "test.string"
paramCase     - "test-string"
pascalCase    - "TestString"
snakeCase     - "test_string"`
		)
	);

	console.log();
	console.log(bgBlue(`当前配置是 -s=${flags.style}`));

	spinner.start();

	try {
		const filePath = path.join(process.cwd(), 'input.json');

		if (fs.existsSync(filePath)) {
			fs.readFile(filePath, 'utf8', function (err, data) {
				if (err) throw err;

				const output = p2map(JSON.parse(data), {
					style: flags.style,
					suffix: flags.suffix,
					prefix: flags.prefix
				});

				if (flags.dryRun) {
					console.log();
					console.log(output);
				}

				console.log();
				console.log(bgGreen('转换成功'));
			});
		} else {
			throw new Error(
				`${process.cwd()} 目录下没有找到 "input.json" 文件 请创建`
			);
		}
	} catch (error) {
		spinner.fail(bgRed(error.message));
		process.exit(1);
	} finally {
		spinner.stop();
	}
};

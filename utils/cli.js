const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	dryRun: {
		type: `boolean`,
		alias: `d`,
		default: true,
		desc: `* Show the output in console`
	},
	style: {
		type: `string`,
		default: `camelCase`,
		alias: `s`,
		desc: `* case style:
camelCase     - "testString" 
constantCase  - "TEST_STRING"
dotCase       - "test.string"
paramCase     - "test-string"
pascalCase    - "TestString"
snakeCase     - "test_string"`
	},
	prefix: {
		type: `string`,
		default: ` `,
		desc: `* prefix      - "prefixTestString"`
	},
	suffix: {
		type: `string`,
		default: ` `,
		desc: `* suffix      - "testStringSuffix"`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	clear: {
		type: `boolean`,
		default: false,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		desc: `Print debug info`
	}
};

const commands = {
	run: { desc: `中文数组转换成拼音命名表格` },
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `nbp2`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);

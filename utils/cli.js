const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
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
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	dryRun: {
		type: `boolean`,
		alias: `dr`,
		default: false,
		desc: `Show the output in console`
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

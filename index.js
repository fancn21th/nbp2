#!/usr/bin/env node

/**
 * nbp2
 * naming by pinyin version 2
 *
 * @author fan, yi-jie <fancn21th.cn>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const run = require('./utils/run');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });

	input.includes(`help`) && cli.showHelp(0);

	input.includes(`run`) && run();

	debug && log(flags);
})();

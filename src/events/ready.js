const chalk = require('chalk');
const { messages, version } = require("../data/config.json");
const printf = require("../utils/strings/printf");

module.exports = {
    name: 'ready',
    once: true,
	run: async client => {
		console.log(`${chalk.blue("[INFO]")} ${chalk.white(messages.botStarted)}`);
        client.user.setActivity(await printf(messages.botStatus, "%d", [ `v${version}` ]), { type: 'WATCHING' });
	}
}
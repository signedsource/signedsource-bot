import chalk from "chalk";
import { Client } from "discord.js";
import util from "node:util";
import config from "../utils/Config";

export default {
    name: 'ready',
    once: true,
	run: async (client: Client) => {
		console.log(`${chalk.blue("[INFO]")} ${chalk.white(config.messages.botStarted)}`);
        client.user.setActivity(util.format(config.messages.botStatus, `v${config.version}`));
	}
}
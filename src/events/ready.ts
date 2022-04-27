import { Client } from "discord.js";
import util from "util";
import config from "../utils/Config";
import logger from "../utils/Logger";

export default {
    name: 'ready',
    once: true,
	run: async (client: Client) => {
		logger.info(config.messages.botStarted);
        client.user.setActivity(util.format(config.messages.botStatus, `v${config.version}`));
	}
}
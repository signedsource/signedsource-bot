import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import fs from "graceful-fs";

import config from "./src/utils/Config";
import logger from "./src/utils/Logger.js";

const token: string = process.env.TOKEN;
const cmds: Array<any> = [];
const cmdFiles = fs.readdirSync(config.commandsDistFolder).filter(f => f.endsWith('.js'));
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        for await (const file of cmdFiles) {
            const cmd = require(`${config.commandsDistFolder}/${file}`);
            try {
                cmds.push(cmd.default.data.toJSON());
            } catch (err) {
                cmds.push(cmd.default.data);
            }
        }

        await rest.put(
            Routes.applicationGuildCommands(config.clientId, config.guildId),
            { body: cmds },
        );

        logger.info("Slash Commands (/) have been deployed");
    } catch (error) {
        logger.error(error);
    }
})();
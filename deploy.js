const token = process.env.TOKEN;
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const chalk = require("chalk");
const fs = require("graceful-fs");

const { commandsFolder, clientId, guildId } = require("./src/data/config.json");
const cmdFiles = fs.readdirSync(commandsFolder).filter(f => f.endsWith('.js'));
const cmds = [];
const rest = new REST({ version: '9' }).setToken(token);

for (const file of cmdFiles) {
    const cmd = require(`${commandsFolder}/${file}`);
    try {
        cmds.push(cmd.data.toJSON());
    } catch (err) {
        cmds.push(cmd.data);
    }
}

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: cmds },
        );

        console.log(`${chalk.blue("[INFO]")} ${chalk.white("Slash commands (/) have been registered")}`);
    } catch (error) {
        console.error(error);
    }
})();
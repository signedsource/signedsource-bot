const Koa = require('koa');
const fs = require('graceful-fs');
const chalk = require('chalk');

(async () => {
	const app = new Koa();

	app.use(ctx => {
		ctx.body = 'SignedSource';
	});

	await Promise.all([
		app.listen(3000)
	]);

	console.log(`${chalk.blue("[INFO]")} ${chalk.white("Web Server Active")}`);
})();

// ---------------------------------------------------- //

const token = process.env.TOKEN || 'ODg4NDgzNDc5NDQ3MjczNDgy.YUTWuA.oVHkl1ciVcquo8XuDmtVkwVq2x0';
const { commandsFolder, eventsFolder, clientId, guildId } = require('./src/data/config.json');
const { botIntents, botPartials } = require("./src/utils/constants");
const debugHandler = require("./src/handlers/debugHandler");
const JSONdb = require('simple-json-db');

const { Client, Collection } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const client = new Client({ intents: botIntents, partials: botPartials });
const rest = new REST({ version: '9' }).setToken(token);

client.on("debug", debug => debugHandler(debug));
client.on("warn", warn => console.log(`${chalk.yellow("[WARN]")} ${chalk.white(warn)}`));
client.on("error", error => console.log(`${chalk.red("[ERROR]")} ${chalk.white(error)}`));

client.commands = new Collection();
client.db = new JSONdb('./src/data/db.json');

var bumpTime;
setInterval(() => {
	bumpTime = client.db.get("bumpTime");
	if (bumpTime <= Date.now()) {
		bumpTime = 0;
		client.db.set("bumpTime", bumpTime)
		client.db.sync();
	} else {
		client.db.sync();
	}

	console.log(`${chalk.blue("[INFO]")} ${chalk.white("The DB has been synced")}`);
}, 600000);

const cmds = [];
const cmdFiles = fs.readdirSync(commandsFolder).filter(f => f.endsWith('.js'));
const evnFiles = fs.readdirSync(eventsFolder).filter(f => f.endsWith('.js'));

for (const file of cmdFiles) {
    const cmd = require(`${commandsFolder}/${file}`);
    cmds.push(cmd.data.toJSON());
    client.commands.set(cmd.data.name, cmd);
}

for (const file of evnFiles) {
    const evn = require(`${eventsFolder}/${file}`);
    if (evn.once) {
        client.once(evn.name, async (...args) => await evn.run(...args));
    } else {
        client.on(evn.name, async (...args) => await evn.run(client, ...args));
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

client.login(token);
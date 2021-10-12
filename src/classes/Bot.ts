import { Client, ClientOptions, Collection } from "discord.js";

import { token, options } from "../utils/Constants";
import logger from "../utils/Logger.js";
import config from "../utils/Config";
import ConfigType from "../interfaces/ConfigType";
import fs from 'graceful-fs';

export default class Bot {
    token: string;
    options: ClientOptions;
    client: Client;
    config: ConfigType;

    constructor() {
        this.token = token;
        this.options = options;
        this.config = config;
        this.client = new Client(this.options);

        //@ts-ignore
        this.client.commands = new Collection();

        this.client.on("warn", (warn: string) => {
            logger.warn(warn);
        });
        
        this.client.on("error", (error: any) => {
            logger.error(error);
        });

        const cmds: Array<any> = [];
        const cmdFiles = fs.readdirSync(this.config.commandsFolder).filter(f => f.endsWith('.js'));
        const evnFiles = fs.readdirSync(this.config.eventsFolder).filter(f => f.endsWith('.js'));

        for (const file of cmdFiles) {
            const cmd = require(`${this.config.commandsFolder}/${file}`);
            try {
                cmds.push(cmd.default.data.toJSON());
            } catch (err) {
                cmds.push(cmd.default.data);
            }

            //@ts-ignore
            this.client.commands.set(cmd.default.data.name, cmd);
        }

        for (const file of evnFiles) {
            const evn = require(`${this.config.eventsFolder}/${file}`);

            if (evn.default.once) {
                this.client.once(evn.default.name, async (...args) => {
                    await evn.default.run(...args);
                });
            } else {
                this.client.on(evn.default.name, async (...args) => {
                    await evn.default.run(this.client, ...args);
                });
            }
        }

        this.client.login(this.token);
    }
}
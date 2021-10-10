import { Client, ClientOptions, Collection } from "discord.js";

import { token, options } from "../utils/Constants";
import logger from "../utils/logger";
import config from "../utils/Config.js";
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

        const cmds = [];
        const cmdFiles = fs.readdirSync(this.config.commandsFolder).filter(f => f.endsWith('.js'));
        const evnFiles = fs.readdirSync(this.config.eventsFolder).filter(f => f.endsWith('.js'));

        for (const file of cmdFiles) {
            const cmd = require(`${this.config.commandsFolder}/${file}`);
            try {
                cmds.push(cmd.data.toJSON());
            } catch (err) {
                cmds.push(cmd.data);
            }
        
            //@ts-ignore
            this.client.commands.set(cmd.data.name, cmd);
        }

        for (const file of evnFiles) {
            const evn = require(`${this.config.eventsFolder}/${file}`);
            if (evn.once) {
                this.client.once(evn.name, async (...args) => await evn.run(...args));
            } else {
                this.client.on(evn.name, async (...args) => await evn.run(this.client, ...args));
            }
        }
    }
}
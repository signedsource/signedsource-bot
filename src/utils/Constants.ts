import { ClientOptions, Intents } from "discord.js";

export const token: string = process.env.TOKEN;
export const options: ClientOptions = {
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS ],
    partials: [ "MESSAGE", "CHANNEL", "USER", "GUILD_MEMBER" ]
}
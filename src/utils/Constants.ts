import { ClientOptions, Intents, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import config from "./Config";
require('dotenv').config({ path: `${__dirname}/../../.env` });

export const token: string = process.env.TOKEN;
export const options: ClientOptions = {
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS ],
    partials: [ "MESSAGE", "CHANNEL", "USER", "GUILD_MEMBER" ]
}

export const noPermsEmbed: MessageEmbed = new MessageEmbed()
    .setTitle(":x: | An error ocurred")
    .setDescription(config.messages.notEnoughPermissions)
    .setColor("RED")
    .setTimestamp();

export const normalTicketButton: MessageActionRow = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('normalTicketBtn')
            .setLabel('Open Support Ticket')
            .setEmoji('📩')
            .setStyle('PRIMARY')
    );

export const applyTicketButton: MessageActionRow = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('applyTicketBtn')
            .setLabel('Open Apply Ticket')
            .setEmoji("ℹ️")
            .setStyle("SUCCESS")
    );

export const suggestionSentEmbed: MessageEmbed = new MessageEmbed()
    .setTitle(":white_check_mark: | Suggestion sent!")
    .setDescription(config.messages.suggestionSent)
    .setColor("GREEN")
    .setTimestamp();

export const errorEmbed: MessageEmbed = new MessageEmbed()
    .setTitle(":x: | An error ocurred")
    .setDescription("An error ocurred while executing this command, the error has been informed")
    .setColor("RED")
    .setTimestamp();
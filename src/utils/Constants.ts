import { ClientOptions, Intents, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import path from "path";
import config from "./Config";
require('dotenv').config({ path: path.join(__dirname, "..", "..", "..", ".env") });

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

export const buttonComponentsArray: MessageActionRow[] = [ 
    new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("verificationCodeBtn-1")
                .setEmoji("1⃣")
                .setStyle("SECONDARY"),
            new MessageButton()
                .setCustomId("verificationCodeBtn-2")
                .setEmoji("2⃣")
                .setStyle("SECONDARY"),
            new MessageButton()
                .setCustomId("verificationCodeBtn-3")
                .setEmoji("3⃣")
                .setStyle("SECONDARY")
        ),
    new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("verificationCodeBtn-4")
                .setEmoji("4⃣")
                .setStyle("SECONDARY"),
            new MessageButton()
                .setCustomId("verificationCodeBtn-5")
                .setEmoji("5⃣")
                .setStyle("SECONDARY"),
            new MessageButton()
                .setCustomId("verificationCodeBtn-6")
                .setEmoji("6⃣")
                .setStyle("SECONDARY")
        ),
    new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("verificationCodeBtn-7")
                .setEmoji("7⃣")
                .setStyle("SECONDARY"),
            new MessageButton()
                .setCustomId("verificationCodeBtn-8")
                .setEmoji("8⃣")
                .setStyle("SECONDARY"),
            new MessageButton()
                .setCustomId("verificationCodeBtn-9")
                .setEmoji("9⃣")
                .setStyle("SECONDARY")
        ),
    new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("verificationCodeBtn-done")
                .setEmoji("☑️")
                .setStyle("SUCCESS"),
            new MessageButton()
                .setCustomId("verificationCodeBtn-0")
                .setEmoji("0⃣")
                .setStyle("SECONDARY"),
            new MessageButton()
                .setCustomId("verificationCodeBtn-clear")
                .setEmoji("<:cx_saumon:967519902246244353>")
                .setStyle("DANGER")
        )
]
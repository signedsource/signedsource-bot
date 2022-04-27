import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageEmbed, TextChannel } from "discord.js";
import util from "util";
import config from "../utils/Config";
import { noPermsEmbed, suggestionSentEmbed } from "../utils/Constants";

export default {
    data: new SlashCommandBuilder()
        .setName("suggest")
        .setDescription("Makes a suggestion")
        .addStringOption(opt => opt
            .setName("suggestion")
            .setDescription("The suggestion to submit")
            .setRequired(true)),
    run: async (interaction: CommandInteraction) => {
        if (interaction.channel.id === config.channels.commands) {
            const ch = (interaction.client.channels.cache.find(c => c.id === config.channels.suggestions) as TextChannel);

            const suggestionsEmbed: MessageEmbed = new MessageEmbed()
                .setTitle(config.messages.suggestionsEmbedTitle)
                .setDescription(util.format(config.messages.suggestionsEmbedDescription, `<@${interaction.user.id}>`, interaction.options.get("suggestion").value))
                .setColor("BLUE")
                .setTimestamp();

            await ch.send({ embeds: [suggestionsEmbed] }).then(async m => {
                await m.react("⬆️");
                await m.react("⬇️");
            });

            await interaction.reply({ embeds: [suggestionSentEmbed], ephemeral: true });
        } else {
            interaction.reply({
                embeds: [ noPermsEmbed ],
                ephemeral: true
            });
        }
    }
}
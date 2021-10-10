import { SlashCommandBuilder } from "@discordjs/builders";
import util from "node:util";
import config from "../utils/Config";
import { noPermsEmbed } from "../utils/Constants";

export default {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Wipes out a specified amount of messages')
        .addNumberOption(opt => opt
            .setName('messages')
            .setDescription('Amount of messages to wipe out')
            .setRequired(true)),
    run: async (interaction: any) => {
        if (interaction.member.permissions.has("DELETE_MESSAGES")) {
            const ch = interaction.client.channels.cache.find(c => c.id === interaction.channelId);

            if (interaction.options.get("messages").value <= 0) {
                await interaction.reply({ content: config.messages.minimumOfDeletedMessages, ephemeral: true });
            } else if (interaction.options.get("messages").value > 100) {
                await ch.bulkDelete(100);
                await interaction.reply({ content: util.format(config.messages.deletedMessages, "100"), ephemeral: true});
            } else {
                await ch.bulkDelete(interaction.options.get("messages").value);
				await interaction.reply({ content: util.format(config.messages.deletedMessages, interaction.options.get("messages").value), ephemeral: true});
            }
        } else {
            interaction.reply({
                embeds: [ noPermsEmbed ],
                ephemeral: true
            });
        }
    }
}
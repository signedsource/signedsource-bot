const { SlashCommandBuilder } = require('@discordjs/builders');
const { messages } = require("../data/config.json");
const validPermissions = require("../utils/validPermissions");
const constants = require('../utils/constants');
const printf = require("../utils/strings/printf");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Wipes out a specified amount of messages')
        .addNumberOption(opt => opt
            .setName('messages')
            .setDescription('Amount of messages to wipe out')
            .setRequired(true)),
    async run(interaction) {
        if (await validPermissions(interaction, "DELETE_MESSAGES")) {
            const ch = interaction.client.channels.cache.find(c => c.id === interaction.channelId);

            if (interaction.options.get("messages").value <= 0) {
                await interaction.reply({ content: messages.minimumOfDeletedMessages, ephemeral: true });
            } else if (interaction.options.get("messages").value > 100) {
                await ch.bulkDelete(100);
                await interaction.reply({ content: await printf(messages.deletedMessages, "%d", [ "100" ]), ephemeral: true});
            } else {
                await ch.bulkDelete(interaction.options.get("messages").value);
				await interaction.reply({ content: await printf(messages.deletedMessages, "%d", [ interaction.options.get("messages").value ]), ephemeral: true});
            }
        } else {
            interaction.reply({
                embeds: [constants.noPermsEmbed],
                ephemeral: true
            });
        }
    }
}
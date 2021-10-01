const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { channels, messages } = require("../data/config.json");
const printf = require("../utils/strings/printf");
const validChannel = require("../utils/validChannel");
const { noPermsEmbed, suggestionSentEmbed } = require('../utils/constants');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Initializes Verify & Ticket embeds')
		.addStringOption(opt => opt
			.setName('suggestion')
			.setDescription('The suggestion to submit')
			.setRequired(true)
		),
	run: async interaction => {
		if (await validChannel(interaction, channels.commands)) {
			const ch = interaction.client.channels.cache.find(c => c.id === channels.suggestions);
		
			const suggestionsEmbed = new MessageEmbed()
				.setTitle(messages.suggestionsEmbedTitle)
				.setDescription(await printf(messages.suggestionsEmbedDescription, "%d", [ `<@${interaction.user.id}>`, `${interaction.options.get("suggestion").value}` ]))
				.setColor("BLUE")
				.setTimestamp();

			await ch.send({ embeds: [suggestionsEmbed] }).then(async m => {
				await m.react("⬆️");
				await m.react("⬇️");
			});

			await interaction.reply({ embeds: [suggestionSentEmbed], ephemeral: true });
		} else {
			interaction.reply({
                embeds: [noPermsEmbed],
                ephemeral: true
            });
		}
	}
}
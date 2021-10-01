const { MessageEmbed, MessageActionRow, MessageButton, Intents } = require("discord.js");
const { messages } = require("../data/config.json");

const botIntents = new Intents();
botIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS);

const constants = {
	noPermsEmbed: new MessageEmbed()
		.setTitle(":x: | An error ocurred")
		.setDescription(messages.notEnoughPermissions)
		.setColor("RED")
		.setTimestamp(),
	normalTicketButton: new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('normalTicketBtn')
				.setLabel('Open Support Ticket')
				.setEmoji('📩')
				.setStyle('PRIMARY')
		),
	applyTicketButton: new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('applyTicketBtn')
				.setLabel('Open Apply Ticket')
				.setEmoji("ℹ️")
				.setStyle("SUCCESS")
		),
	suggestionSentEmbed: new MessageEmbed()
		.setTitle(":white_check_mark: | Suggestion sent!")
		.setDescription(messages.suggestionSent)
		.setColor("GREEN")
		.setTimestamp(),
	errorEmbed: new MessageEmbed()
		.setTitle(":x: | An error ocurred")
		.setDescription("An error ocurred while executing this command, the error has been informed")
		.setColor("RED")
		.setTimestamp(),
	botIntents,
	botPartials: ["MESSAGE", "CHANNEL", "USER", "GUILD", "GUILD_MEMBER"]
}

module.exports = constants;
const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const { roles, channels, messages } = require ("../data/config.json");
const printf = require("../utils/strings/printf");
const strjoin = require("../utils/strings/strjoin");

const createTicket = async (interaction, ticketType) => {
	var desc, embeds;
	if (ticketType == "apply") desc = messages.applyTicketMessage;
	if (ticketType == "support") desc = messages.supportTicketMessage;
    await interaction.guild.channels.create(`${ticketType}-ticket-${interaction.member.user.username}`, {
        parent: interaction.client.channels.cache.find(c => c.id === channels.ticketsCategory),
        permissionOverwrites: [
            {
                id: interaction.member.user.id,
                allow: [
                    Permissions.FLAGS.VIEW_CHANNEL,
                    Permissions.FLAGS.SEND_MESSAGES,
                    Permissions.FLAGS.READ_MESSAGE_HISTORY
                ],
            },
			{
				id: interaction.guild.roles.everyone,
				deny: [
					Permissions.FLAGS.VIEW_CHANNEL,
					Permissions.FLAGS.SEND_MESSAGES,
					Permissions.FLAGS.READ_MESSAGE_HISTORY
				]
			},
			{
				id: roles.member,
				deny: [
					Permissions.FLAGS.VIEW_CHANNEL,
					Permissions.FLAGS.SEND_MESSAGES,
					Permissions.FLAGS.READ_MESSAGE_HISTORY
				]
			},
			{
				id: roles.staff,
				allow: [
					Permissions.FLAGS.VIEW_CHANNEL,
					Permissions.FLAGS.SEND_MESSAGES,
					Permissions.FLAGS.READ_MESSAGE_HISTORY
				]
			},
			{
				id: roles.signedteam,
				allow: [
					Permissions.FLAGS.VIEW_CHANNEL,
					Permissions.FLAGS.SEND_MESSAGES,
					Permissions.FLAGS.READ_MESSAGE_HISTORY
				]
			}
        ],
    }).then(async c => {
        const closeTicketRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('closeTicketBtn')
                    .setLabel('Close Ticket')
                    .setEmoji('❌')
                    .setStyle('DANGER')
            );

        const ticketsEmbed = new MessageEmbed()
            .setColor('#EE0000')
            .setTitle(`Ticket of ${interaction.member.user.username}`)
            .setDescription(desc);

		const qasEmbed = new MessageEmbed()
			.setColor('#EE0000')
			.setDescription(await strjoin(messages.questionsApply))
			.setTimestamp();

		if (ticketType == "apply") {
			embeds = [ ticketsEmbed, qasEmbed ];
		} else {
			embeds = [ ticketsEmbed ];
		}

        await c.send({
			content: `<@${interaction.member.user.id}> | <@&${roles.signedteam}> | <@&${roles.staff}>`,
            embeds,
            components: [closeTicketRow]
        }).then(m => m.pin());
    }).catch(e => console.log(e));
}

module.exports = createTicket;
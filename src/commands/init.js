const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const constants = require('../utils/constants');
const { channels, roles } = require("../data/config.json");
const validPermissions = require("../utils/validPermissions");
const validRole = require("../utils/validRole");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('init')
        .setDescription('Initializes Verify & Ticket embeds'),
    async run(interaction) {
        if (await validPermissions(interaction, "ADMINISTRATOR") || await validRole(interaction, roles.staff)) {
            const verificationChannel = interaction.client.channels.cache.find(c => c.id === channels.verification);
            const ticketsChannel = interaction.client.channels.cache.find(c => c.id === channels.tickets);

            const verificationButton = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('verificationBtn')
                        .setLabel('Verify')
                        .setEmoji('✅')
                        .setStyle('SUCCESS')
                );
            
            const ticketsButton = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('openTicketBtn')
                        .setLabel("Open Ticket")
                        .setEmoji('📩')
                        .setStyle('PRIMARY')
                );

            const verificationEmbed = new MessageEmbed()
                .setColor('#EE0000')
                .setTitle('Verify yourself')
                .setDescription(':flag_es: Verificate para obtener acceso al resto del servidor, en caso de tener algun problema no dudes en mandarle un MD a los staffs!\n\n:flag_us: Verify yourself to gain access to the rest of the server, in case of having any problem verifying don\'t think twice, and DM a Staff');

            const ticketsEmbed = new MessageEmbed()
                .setColor('#EE0000')
                .setTitle('Tickets')
                .setDescription(':flag_es: Haz click abajo para abrir un ticket\n\n:flag_us: Click down below to open a Ticket');

            const completedEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setTitle(":white_check_mark: | Done!")
                .setDescription("The embeds have been sent!")
            
            await verificationChannel.bulkDelete(100);
            await verificationChannel.send({ embeds: [verificationEmbed], components: [verificationButton]});
            await ticketsChannel.bulkDelete(100);
            await ticketsChannel.send({ embeds: [ticketsEmbed], components: [ticketsButton]});
            await interaction.reply({ embeds: [completedEmbed], ephemeral: true });
        } else {
            interaction.reply({
                embeds: [constants.noPermsEmbed],
                ephemeral: true
            });
        }
    }
}
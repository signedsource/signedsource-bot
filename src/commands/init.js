const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

const constants = require('../utils/constants');
const { channels, roles } = require("../data/config.json");
const validPermissions = require("../utils/validPermissions");
const validRole = require("../utils/validRole");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("init")
        .setDescription("Init's a specific system message")
        .addStringOption(opt => opt
            .setName("message")
            .setDescription("Select the system message to init")
            .addChoice("Verification", "verification")
            .addChoice("Tickets", "tickets")
            .addChoice("Roles (Requires CEO)", "roles")
        .setRequired(true)),
    async run(interaction) {
        const application = await interaction.options.get("application").value;
        const verificationChannel = interaction.client.channels.cache.find(c => c.id === channels.verification);
        const ticketsChannel = interaction.client.channels.cache.find(c => c.id === channels.tickets);
        const rolesChannel = interaction.client.channels.cache.find(c => c.id === channels.roles);
        const completedEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(":white_check_mark: | Done!")
            .setDescription("The embeds have been sent!")

        await interaction.deferReply({ ephemeral: true });

        switch (application) {
            case "verification":
                if (await validPermissions(interaction, "ADMINISTRATOR") || await validRole(interaction, roles.staff)) {
                    const verificationButton = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId('verificationBtn')
                                .setLabel('Verify')
                                .setEmoji('✅')
                                .setStyle('SUCCESS')
                        );

                    const verificationEmbed = new MessageEmbed()
                        .setColor('#EE0000')
                        .setTitle('Verify yourself')
                        .setDescription(':flag_es: Verificate para obtener acceso al resto del servidor, en caso de tener algun problema no dudes en mandarle un MD a los staffs!\n\n:flag_us: Verify yourself to gain access to the rest of the server, in case of having any problem verifying don\'t think twice, and DM a Staff');
                    
                    await verificationChannel.bulkDelete(100);
                    await verificationChannel.send({ embeds: [verificationEmbed], components: [verificationButton] });
                    await interaction.editReply({ embeds: [completedEmbed], ephemeral: true });
                    break;
                } else {
                    interaction.reply({
                        embeds: [constants.noPermsEmbed],
                        ephemeral: true
                    });
                    break;
                }
            case "tickets":
                if (await validPermissions(interaction, "ADMINISTRATOR") || await validRole(interaction, roles.staff)) {
                    const ticketsButton = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId('openTicketBtn')
                                .setLabel("Open Ticket")
                                .setEmoji('📩')
                                .setStyle('PRIMARY')
                        );

                    const ticketsEmbed = new MessageEmbed()
                        .setColor('#EE0000')
                        .setTitle('Tickets')
                        .setDescription(':flag_es: Haz click abajo para abrir un ticket\n\n:flag_us: Click down below to open a Ticket');

                    await ticketsChannel.bulkDelete(100);
                    await ticketsChannel.send({ embeds: [ticketsEmbed], components: [ticketsButton] });
                    await interaction.editReply({ embeds: [completedEmbed], ephemeral: true });
                    break;
                } else {
                    interaction.reply({
                        embeds: [constants.noPermsEmbed],
                        ephemeral: true
                    }); 
                    break;
                }
            case "roles":
                if (await validPermissions(interaction, "ADMINISTRATOR") || await validRole(interaction, roles.ceo)) {
                    const rolesRow = new MessageActionRow()
                        .addComponents(
                            new MessageSelectMenu()
                                .setCustomId('roles')
                                .setPlaceholder("No roles selected!")
                                .setMinValues(1)
                                .addOptions([
                                    {
                                        label: 'Ethical Hacker',
                                        value: '888512901562925066',
                                        emoji: '🔧'
                                    },
                                    {
                                        label: 'Pentester',
                                        value: '888514696104275968',
                                        emoji: '🪓'
                                    },
                                    {
                                        label: 'Cyber Security',
                                        value: '888513751932887041',
                                        emoji: '🔐'
                                    },
                                    {
                                        label: 'Game Dev',
                                        value: '888543801587662878',
                                        emoji: '👾'
                                    },
                                    {
                                        label: 'Discord Bot Dev',
                                        value: '888519273838944298',
                                        emoji: '⚙'
                                    },
                                    {
                                        label: 'Full-Stack',
                                        value: '888510117157437461',
                                        emoji: '🥇'
                                    },
                                    {
                                        label: 'Back-End',
                                        value: '888508286436012132',
                                        emoji: '👥'
                                    },
                                    {
                                        label: 'Front-End',
                                        value: '888505358807629824',
                                        emoji: '🎨'
                                    },
                                    {
                                        label: 'UX/UI',
                                        value: '888531035082600499',
                                        emoji: '📕'
                                    },
                                    {
                                        label: 'Graphic Designer',
                                        value: '888512471554465802',
                                        emoji: '🎉'
                                    }
                                ])
                        );

                    const rolesEmbed = new MessageEmbed()
                        .setColor("#EE0000")
                        .setTitle("Roles")
                        .setDescription(":flag_es: Selecciona tus roles en dependencia de tus conocimientos\n\n:flag_us: Select your roles in dependance of your knowledge")
        
                    await rolesChannel.bulkDelete(100);
                    await rolesChannel.send({ embeds: [rolesEmbed], components: [rolesRow] });
                    await interaction.editReply({ embeds: [completedEmbed], ephemeral: true });
                    break;
                } else {
                    interaction.reply({
                        embeds: [constants.noPermsEmbed],
                        ephemeral: true
                    });
                    break;
                }
        }
    }
}
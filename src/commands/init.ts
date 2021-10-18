import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, TextChannel } from "discord.js";
import config from "../utils/Config";
import { applyTicketButton, noPermsEmbed, normalTicketButton } from "../utils/Constants";

export default {
    data: new SlashCommandBuilder()
        .setName("init")
        .setDescription("Inits a specific bot message.")
        .addStringOption(opt => opt
            .setName("message")
            .setDescription("Select the bot message to init")
            .addChoice("Verification", "verification")
            .addChoice("Tickets", "tickets")
            .addChoice("Private Voices", "privatevoice")
            .addChoice("Roles (Requires CEO)", "roles")
            .setRequired(true)),
    run: async (interaction: CommandInteraction) => {
        const application: (string | number | boolean) = interaction.options.get("message").value;
        const verificationChannel = (interaction.guild.channels.cache.find(c => c.id === config.channels.verification) as TextChannel)
        const ticketsChannel = (interaction.guild.channels.cache.find(c => c.id === config.channels.tickets) as TextChannel);
        const rolesChannel = (interaction.guild.channels.cache.find(c => c.id === config.channels.roles) as TextChannel);
        const privateVoiceChannel = (interaction.guild.channels.cache.find(c => c.id === config.channels.privateVoice) as TextChannel);
        //@ts-ignore
        const member: GuildMember = interaction.guild.members.cache.find((m: GuildMember) => m.id === interaction.member.id);
        const completedEmbed: MessageEmbed = new MessageEmbed()
            .setTitle(":white_check_mark: | Done!")
            .setDescription("The message has been sent successfully")
            .setColor("GREEN")
            .setTimestamp();

        await interaction.deferReply({ ephemeral: true });

        switch (application) {
            case "verification":
                if (member.permissions.has("ADMINISTRATOR") || member.roles.cache.find(r => r.id === config.roles.staff)) {
                    const verificationButton: MessageActionRow = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId('verificationBtn')
                                .setLabel('Verify')
                                .setEmoji('✅')
                                .setStyle('SUCCESS')
                        );

                    const verificationEmbed: MessageEmbed = new MessageEmbed()
                        .setColor('#EE0000')
                        .setTitle('Verify yourself')
                        .setDescription(':flag_es: Verificate para obtener acceso al resto del servidor, en caso de tener algun problema no dudes en mandarle un MD a los staffs!\n\n:flag_us: Verify yourself to gain access to the rest of the server, in case of having any problem verifying don\'t think twice, and DM a Staff');

                    await verificationChannel.bulkDelete(100);
                    await verificationChannel.send({ embeds: [verificationEmbed], components: [verificationButton] });
                    //@ts-ignore
                    await interaction.editReply({ embeds: [completedEmbed], ephemeral: true });
                    break;
                } else {
                    interaction.reply({
                        embeds: [ noPermsEmbed ],
                        ephemeral: true
                    });
                    break;
                }
            case "tickets":
                if (member.permissions.has("ADMINISTRATOR") || member.roles.cache.find(r => r.id === config.roles.staff)) {
                    const ticketsEmbed: MessageEmbed = new MessageEmbed()
                        .setColor('#EE0000')
                        .setTitle('Tickets')
                        .setDescription(':flag_es: Haz click abajo para abrir un ticket\n\n:flag_us: Click down below to open a Ticket');

                    await ticketsChannel.bulkDelete(100);
                    await ticketsChannel.send({ embeds: [ticketsEmbed], components: [normalTicketButton, applyTicketButton] });
                    //@ts-ignore
                    await interaction.editReply({ embeds: [completedEmbed], ephemeral: true });
                    break;
                } else {
                    interaction.reply({
                        embeds: [ noPermsEmbed ],
                        ephemeral: true
                    });
                    break;
                }
            case "roles":
                if (member.permissions.has("ADMINISTRATOR") || member.roles.cache.find(r => r.id === config.roles.ceo)) {
                    const rolesRow: MessageActionRow = new MessageActionRow()
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

                    const rolesEmbed: MessageEmbed = new MessageEmbed()
                        .setColor("#EE0000")
                        .setTitle("Roles")
                        .setDescription(":flag_es: Selecciona tus roles en dependencia de tus conocimientos\n\n:flag_us: Select your roles in dependance of your knowledge")
        
                    await rolesChannel.bulkDelete(100);
                    await rolesChannel.send({ embeds: [rolesEmbed], components: [rolesRow] });
                    //@ts-ignore
                    await interaction.editReply({ embeds: [completedEmbed], ephemeral: true });
                } else {
                    interaction.reply({
                        embeds: [ noPermsEmbed ],
                        ephemeral: true
                    });
                    break;
                }
            case "privatevoice":
                if (member.permissions.has("ADMINISTRATOR") || member.roles.cache.find(r => r.id === config.roles.staff)) {
                    const privateVoiceEmbed: MessageEmbed = new MessageEmbed()
                        .setColor('#EE0000')
                        .setTitle('Private Voices')
                        .setDescription(':flag_es: Haz click abajo para crear tú voz privada\n\n:flag_us: Click down below to create your private voice channel');

                    const privateVoiceButton: MessageActionRow = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId('privateVoiceBtn')
                                .setLabel('Create Voice')
                                .setEmoji('<:discord_voice_from_VEGA:899709000113868920>')
                                .setStyle('PRIMARY')
                        );

                    await privateVoiceChannel.bulkDelete(100);
                    await privateVoiceChannel.send({ embeds: [privateVoiceEmbed], components: [privateVoiceButton] });
                    //@ts-ignore
                    await interaction.editReply({ embeds: [completedEmbed], ephemeral: true });
                    break;
                } else {
                    interaction.reply({
                        embeds: [ noPermsEmbed ],
                        ephemeral: true
                    });
                    break;
                }
        }
    }
}
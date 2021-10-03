const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { messages } = require('../data/config.json');
const strjoin = require("../utils/strings/strjoin");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("welcome")
        .setDescription("Sends the welcome message, and pings the user")
        .addUserOption(opt => opt
            .setName("target")
            .setDescription("The member to welcome")
            .setRequired(true)),
    run: async interaction => {
        const db = interaction.client.db;
        const welcomedMembers = db.get("welcomedMembers");
        const member = interaction.options.getUser('target');

        if (welcomedMembers.indexOf(member.id) === -1 && !member.bot) {
            const welcomeEmbed = new MessageEmbed()
                .setTitle("Welcome!")
                .setDescription(await strjoin(messages.welcomeUserCommand))
                .setColor("RANDOM")
                .setTimestamp()

            const doneEmbed = new MessageEmbed()
                .setTitle("Done :white_check_mark:!")
                .setDescription("The welcome message has been sent!")
                .setColor("GREEN")
                .setTimestamp()
            
            welcomedMembers.push(member.id);
            await db.set("welcomedMembers", welcomedMembers);

            await interaction.reply({ embeds: [ doneEmbed ], ephemeral: true });
            await interaction.channel.send({ content: `<@${member.id}>`, embeds: [ welcomeEmbed ]});
        } else {
            const alreadyWelcomed = new MessageEmbed()
                .setTitle(":x: | Error")
                .setDescription("This user has been already welcomed or it is a bot!")
                .setColor("RED")
                .setTimestamp()

            await interaction.reply({ embeds: [ alreadyWelcomed ], ephemeral: true });
        }
    }
}
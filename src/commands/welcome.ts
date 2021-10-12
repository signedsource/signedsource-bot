import { CommandInteraction, MessageEmbed, User } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import config from "../utils/Config";

export default {
    data: new SlashCommandBuilder()
        .setName("welcome")
        .setDescription("Sends the welcome message & pings the user")
        .addUserOption(opt => opt
            .setName("target")
            .setDescription("The member to welcome")
            .setRequired(true)),
    run: async (interaction: CommandInteraction) => {
        const member: User = interaction.options.getUser('target');

        const welcomeEmbed: MessageEmbed = new MessageEmbed()
            .setTitle("Welcome!")
            .setDescription(config.messages.welcomeUserCommand.join("\n"))
            .setColor("RANDOM")
            .setTimestamp();

        const doneEmbed: MessageEmbed = new MessageEmbed()
            .setTitle("Done :white_check_mark:!")
            .setDescription("The welcome message has been sent!")
            .setColor("GREEN")
            .setTimestamp();

        await interaction.reply({ embeds: [doneEmbed], ephemeral: true });
        await interaction.channel.send({ content: `<@${member.id}>`, embeds: [welcomeEmbed] });
    }
}
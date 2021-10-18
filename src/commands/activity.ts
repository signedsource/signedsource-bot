import { SlashCommandBuilder } from "@discordjs/builders";
import { ChannelType } from 'discord-api-types/v9';
import { Client, CommandInteraction, MessageEmbed } from "discord.js";
import Activity from "../classes/Activity";

export default {
    date: new SlashCommandBuilder()
        .setName("activity")
        .setDescription("Add's up a activity to a channel")
        .addChannelOption(opt => opt
            .setName("channel")
            .setDescription("The voice channel that will be used for the activity")
            //@ts-ignore
            .addChannelType(ChannelType.GuildVoice)
            .setRequired(true))
        .addStringOption(opt => opt
            .setName("application")
            .setDescription("Select the application to use")
            .addChoice("Youtube Together", "755600276941176913")
            .addChoice("Youtube Together (Development Release)", "880218832743055411")
            .addChoice("Fishington", "814288819477020702")
            .addChoice("Chess In The Park", "832012774040141894")
            .addChoice("Chess In The Park (Development Release)", "832012586023256104")
            .addChoice("Betrayal", "773336526917861400")
            .addChoice("Poker Night", "755827207812677713")
            .addChoice("Letter Tile", "879863686565621790")
            .addChoice("Word Snack", "879863976006127627")
            .addChoice("Doodle Crew", "")
            .setRequired(true)
        ),
    run: async (interaction: CommandInteraction) => {
        const client: Client = interaction.client;
        const channel = interaction.options.getChannel("channel");
        const application = interaction.options.get("application").value;

        const invite = await new Activity(client).create(application, channel);

        if (invite) {
            const inviteEmbed: MessageEmbed = new MessageEmbed()
                .setTitle("Done!")
                //@ts-ignore
                .setDescription(`Here you have the invite to use the [application](https://discord.com/invite/${invite.code})`)
                .setColor("GREEN")
                .setTimestamp();

            await interaction.reply({ embeds: [inviteEmbed] });
        } else {
            const errorEmbed: MessageEmbed = new MessageEmbed()
                .setTitle(":x: | An error ocurred")
                .setDescription("An error ocurred while gathering the invite code, please try again in a few moments")
                .setColor("RED")
                .setTimestamp();

            await interaction.reply({ embeds: [errorEmbed], ephemeral: true })
        }
    }
}
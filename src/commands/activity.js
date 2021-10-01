const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const activityHandler = require("../handlers/activityHandler");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("activity")
        .setDescription("Add's up a activity to a channel")
        .addChannelOption(opt => opt
            .setName("channel")
            .setDescription("The voice channel that will be used for the activity")
            .setRequired(true))
        .addStringOption(opt => opt
            .setName("application")
            .setDescription("Select the application to use")
            .addChoice("Youtube Together", "755600276941176913")
            .addChoice("Fishington", "814288819477020702")
            .addChoice("Chess In The Park (Development Release)", "832012586023256104")
            .addChoice("Betrayal", "773336526917861400")
            .addChoice("Poker Night", "755827207812677713")
            .addChoice("Letter Tile", "879863686565621790")
            .addChoice("Word Snack", "879863976006127627")
            .addChoice("Doodle Crew", "878067389634314250")
            .setRequired(true)),
    run: async interaction => {
        const client = interaction.client;
        const channel = await interaction.options.getChannel("channel");
        const application = await interaction.options.get("application").value;

        if (channel.type === "GUILD_VOICE") {
            const invite = await activityHandler(client, channel, application);
            
            if (invite) {
                const inviteEmbed = new MessageEmbed()
                    .setTitle("Done!")
                    .setDescription(`Here you have the invite to use that [application](https://discord.com/invite/${invite.code})`)
                    .setColor("RANDOM")
                    .setTimestamp();

                await interaction.reply({ embeds: [ inviteEmbed ]})
            } else {
                const errorEmbed = new MessageEmbed()
                    .setTitle(":x: | An error ocurred")
                    .setDescription("An error ocurred while gathering the invite code, please try again in a few moments")
                    .setColor("RED")
                    .setTimestamp();

                await interaction.reply({ embeds: [ errorEmbed ], ephemeral: true })
            }
        } else {
            // We won't get here, but who knows.

            const invalidChannelEmbed = new MessageEmbed()
                .setTitle(":x: | Invalid channel")
                .setDescription("The provided channel isn't a valid one, it must be a voice one")
                .setColor("RED")
                .setTimestamp();

            await interaction.reply({ embeds: [ invalidChannelEmbed ]});
        }
    }
}
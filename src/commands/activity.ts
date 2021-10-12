import { SlashCommandBuilder } from "@discordjs/builders";
import { ChannelType } from 'discord-api-types/v9';
import { Client, CommandInteraction, MessageEmbed } from "discord.js";
import Activity from "../classes/Activity";

export default {
    data: {
        name: 'activity',
        description: "Add's up a activity to a channel",
        options: [
            {
                type: 7,
                name: 'channel',
                description: 'The voice channel that will be used for the activity',
                channel_types: [ChannelType.GuildVoice],
                required: true
            },
            {
                type: 3,
                name: 'application',
                description: 'Select the application to use',
                required: true,
                choices: [
                    { name: 'Youtube Together', value: '755600276941176913' },
                    {
                        name: 'Youtube Together (Development Release)',
                        value: '880218832743055411'
                    },
                    { name: 'Fishington', value: '814288819477020702' },
                    {
                        name: 'Chess In The Park (Development Release)',
                        value: '832012586023256104'
                    },
                    { name: 'Betrayal', value: '773336526917861400' },
                    { name: 'Poker Night', value: '755827207812677713' },
                    { name: 'Letter Tile', value: '879863686565621790' },
                    { name: 'Word Snack', value: '879863976006127627' },
                    { name: 'Doodle Crew', value: '878067389634314250' }
                ]
            }
        ]
    },
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
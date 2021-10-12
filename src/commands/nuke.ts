import { CommandInteraction } from "discord.js/typings/index.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { errorEmbed, noPermsEmbed } from "../utils/Constants";

export default {
    data: new SlashCommandBuilder()
        .setName("nuke")
        .setDescription("Deletes the channel and re-creates it with the same properties"),
    run: async (interaction: CommandInteraction) => {
        //@ts-ignore
        const member: GuildMember = interaction.guild.members.cache.find(m => m.id === interaction.member.id);
        if (member.permissions.has("ADMINISTRATOR")) {
            //@ts-ignore
            interaction.channel.clone({ position: interaction.channel.rawPosition }).then(c => {
                c.send("https://tenor.com/sTFz.gif");
                interaction.channel.delete().catch((err: Error) => {
					interaction.reply({
						embeds: [ errorEmbed ],
						ephemeral: true
					});
				});
            });
        } else {
            interaction.reply({
                embeds: [ noPermsEmbed ],
                ephemeral: true
            });
        }
    }
}
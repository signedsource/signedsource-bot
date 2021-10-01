const { SlashCommandBuilder } = require('@discordjs/builders');
const constants = require('../utils/constants');
const validPermissions = require("../utils/validPermissions");
const { errorEmbed } = require("../utils/constants");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nuke')
        .setDescription('Deletes the channel and creates a clone of it with the same properties'),
    async run(interaction) {
        if (await validPermissions(interaction, "MANAGE_CHANNELS")) {
            interaction.channel.clone({ position: interaction.channel.rawPosition }).then(c => {
                c.send("https://tenor.com/sTFz.gif");
                interaction.channel.delete().catch(err => {
					interaction.reply({
						embeds: [errorEmbed],
						ephemeral: true
					});
				})
            });
        } else {
            interaction.reply({
                embeds: [constants.noPermsEmbed],
                ephemeral: true
            });
        }
    }
}
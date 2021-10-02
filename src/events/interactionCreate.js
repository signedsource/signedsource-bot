const createTicket = require("../handlers/createTicket");
const { roles } = require("../data/config.json");
const { normalTicketButton, applyTicketButton, errorEmbed } = require("../utils/constants");

module.exports = {
    name: 'interactionCreate',
    once: false,
    run: async (client, interaction) => {
		await interaction.guild.commands.fetch();

        if (interaction.isSelectMenu()) {
            await interaction.reply({ content: 'This is still work in progress', ephemeral: true });
        } else if (interaction.isButton()) {
			const usedBtns = client.db.get("usedButtons");
			const usedButtonsBy = client.db.get("usedButtonsBy");

			if (usedBtns[interaction.customId] == null || usedBtns[interaction.customId] == NaN) {
				usedBtns[interaction.customId] = 1;
			} else if (usedBtns[interaction.customId] >= 0) {
				usedBtns[interaction.customId] += 1;
			}

			if (usedButtonsBy[interaction.customId] == null || usedButtonsBy[interaction.customId] == NaN) {
				usedButtonsBy[interaction.customId] = {};
				usedButtonsBy[interaction.customId][interaction.member.id] = 1;
			} else {
				if (usedButtonsBy[interaction.customId][interaction.member.id] == null || usedButtonsBy[interaction.customId][interaction.member.id] == NaN) {
					usedButtonsBy[interaction.customId][interaction.member.id] = 1;
				} else if (usedButtonsBy[interaction.customId][interaction.member.id] >= 0) {
					usedButtonsBy[interaction.customId][interaction.member.id] += 1;
				}
			}

			client.db.set("usedButtons", usedBtns);
			client.db.set("usedButtonsBy", usedButtonsBy);
			client.db.sync();

            switch (interaction.customId) {
                case "verificationBtn":
                    await interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.id === roles.member));

					const verifiedMembers = client.db.get("verifiedMembers");
					if (verifiedMembers.indexOf(interaction.member.id) == -1) {
						verifiedMembers.push(interaction.member.id);
						client.db.set("verifiedMembers", verifiedMembers);
						client.db.sync();
					}
					
                    await interaction.deferUpdate();
                    break;
                case "openTicketBtn":
                    await interaction.reply({ content: 'Select one', components: [normalTicketButton, applyTicketButton], ephemeral: true });
                    break;
                case "normalTicketBtn":
                    await createTicket(interaction, "support");
                    await interaction.deferUpdate();
                    break;
                case "applyTicketBtn":
                    await createTicket(interaction, "apply");
                    await interaction.deferUpdate();
                    break;
                case "closeTicketBtn":
                    await interaction.deferUpdate();
                    await interaction.channel.delete();
                    break;
            }
        } else if (interaction.isCommand()) {
            const cmd = interaction.client.commands.get(interaction.commandName);
            if (!cmd) return;

			const usedCmds = client.db.get("usedCommands");
			const cmdsUsedBy = client.db.get("commandsUsedBy");

			if (usedCmds[interaction.commandId] == null || usedCmds[interaction.commandId] == NaN) {
				usedCmds[interaction.commandId] = 1;
			} else if (usedCmds[interaction.commandId] >= 0) {
				usedCmds[interaction.commandId] += 1;
			}

			if (cmdsUsedBy[interaction.commandId] == null || cmdsUsedBy[interaction.commandId] == NaN) {
				cmdsUsedBy[interaction.commandId] = {};
				cmdsUsedBy[interaction.commandId][interaction.member.id] = 1;
			} else {
				if (cmdsUsedBy[interaction.commandId][interaction.member.id] == null || cmdsUsedBy[interaction.commandId][interaction.member.id] == NaN) {
					cmdsUsedBy[interaction.commandId][interaction.member.id] = 1;
				} else if (cmdsUsedBy[interaction.commandId][interaction.member.id] >= 0) {
					cmdsUsedBy[interaction.commandId][interaction.member.id] += 1;
				}
			}

			client.db.set('usedCommands', usedCmds);
			client.db.set('commandsUsedBy', cmdsUsedBy);
			client.db.sync();

            try {
                await cmd.run(interaction);
            } catch (err) {
                console.log(err);
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            }
        }
    }
}
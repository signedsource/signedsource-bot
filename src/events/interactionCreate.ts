import { Client } from "discord.js";
import Ticket from "../classes/Tickets";
import config from "../utils/Config";
import { applyTicketButton, errorEmbed, normalTicketButton } from "../utils/Constants";
import logger from "../utils/Logger";

export default {
    name: 'interactionCreate',
    once: false,
    run: async (client: Client, interaction: any) => {
        if (interaction.isSelectMenu()) {
			const asignableRoles: string[] = config.roles.asignableRoles;

			for await (const role of asignableRoles) {
				const rl = interaction.guild.roles.cache.find(r => r.id === role);

				if (interaction.member.roles.cache.find(r => r.id == role)) {
					interaction.member.roles.remove(rl);
				}
			}

			for await (const val of interaction.values) {
				const rl = interaction.guild.roles.cache.find(r => r.id === val);

				if (!interaction.member.roles.cache.find(r => r.id == val)) {
					interaction.member.roles.add(rl);
				} else if (interaction.member.roles.cache.find(r => r.id == val)) {
					interaction.member.roles.add(rl);
				}
			}

			await interaction.reply({ content: 'Roles asigned.', ephemeral: true });
        } else if (interaction.isButton()) {
            switch (interaction.customId) {
                case "verificationBtn":
                    await interaction.deferUpdate();
                    await interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.id === config.roles.member));
                    break;
                case "openTicketBtn":
                    await interaction.reply({ content: 'Select one', components: [normalTicketButton, applyTicketButton], ephemeral: true });
                    break;
                case "normalTicketBtn":
                    await interaction.deferUpdate();
                    new Ticket(interaction).create("support");
                    break;
                case "applyTicketBtn":
                    await interaction.deferUpdate();
                    new Ticket(interaction).create("apply");
                    break;
                case "closeTicketBtn":
                    await interaction.deferUpdate();
                    new Ticket(interaction).delete(interaction.channel);
                    break;
            }
        } else if (interaction.isCommand()) {
            const cmd = interaction.client.commands.get(interaction.commandName);
            if (!cmd) return;

            try {
                await cmd.default.run(interaction);
            } catch (err) {
                logger.error(err);
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            }
        }
    }
}
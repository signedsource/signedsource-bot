import { Client } from "discord.js";
import ticketHandler from "../handlers/TicketHandler";
import config from "../utils/Config";
import { applyTicketButton, errorEmbed, normalTicketButton } from "../utils/Constants";

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
                    await interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.id === config.roles.member));
                    await interaction.deferUpdate();
                    break;
                case "openTicketBtn":
                    await interaction.reply({ content: 'Select one', components: [normalTicketButton, applyTicketButton], ephemeral: true });
                    break;
                case "normalTicketBtn":
                    await ticketHandler(interaction, "support");
                    await interaction.deferUpdate();
                    break;
                case "applyTicketBtn":
                    await ticketHandler(interaction, "apply");
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
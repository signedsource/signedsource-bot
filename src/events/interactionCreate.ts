import { ButtonInteraction, Client, CommandInteraction, Role, SelectMenuInteraction } from "discord.js";
import PrivateVoice from "../classes/PrivateVoice";
import Ticket from "../classes/Tickets";
import Verification from "../classes/Verification";
import config from "../utils/Config";
import { errorEmbed } from "../utils/Constants";
import logger from "../utils/Logger";

export default {
    name: 'interactionCreate',
    once: false,
    run: async (client: Client, interaction: any) => {
        if (interaction.isSelectMenu()) {
			const asignableRoles: string[] = config.roles.asignableRoles;

			for await (const role of asignableRoles) {
				const rl = interaction.guild.roles.cache.find((r: Role) => r.id === role);

				if (interaction.member.roles.cache.find((r: Role) => r.id == role)) {
					interaction.member.roles.remove(rl);
				}
			}

			for await (const val of interaction.values) {
				const rl = interaction.guild.roles.cache.find((r: Role) => r.id === val);

				if (!interaction.member.roles.cache.find((r: Role) => r.id == val)) {
					interaction.member.roles.add(rl);
				} else if (interaction.member.roles.cache.find((r: Role) => r.id == val)) {
					interaction.member.roles.add(rl);
				}
			}

			await interaction.reply({ content: 'Roles asigned.', ephemeral: true });
        } else if (interaction.isButton()) {
            switch (interaction.customId) {
                case "verificationBtn":
                    await interaction.deferReply({ ephemeral: true });
                    new Verification(interaction).start();
                    break;
                case "verificationCodeBtn-1":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("1");
                    break;
                case "verificationCodeBtn-2":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("2");
                    break;
                case "verificationCodeBtn-3":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("3");
                    break;
                case "verificationCodeBtn-4":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("4");
                    break;
                case "verificationCodeBtn-5":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("5");
                    break;
                case "verificationCodeBtn-6":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("6");
                    break;
                case "verificationCodeBtn-7":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("7");
                    break;
                case "verificationCodeBtn-8":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("8");
                    break;
                case "verificationCodeBtn-9":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("9");
                    break;
                case "verificationCodeBtn-0":
                    await interaction.deferUpdate();
                    new Verification(interaction).update("0");
                    break;
                case "verificationCodeBtn-done":
                    await interaction.deferUpdate();
                    new Verification(interaction).verify();
                    break;
                case "verificationCodeBtn-clear":
                    await interaction.deferUpdate();
                    new Verification(interaction).reset();
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
                case "privateVoiceBtn":
                    await interaction.deferUpdate();
                    new PrivateVoice(interaction).create(interaction.member, interaction.guild);
                    break;
                case "deletePrivateVoiceBtn":
                    await interaction.deferUpdate();
                    new PrivateVoice(interaction).delete(interaction.member, interaction.guild);
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
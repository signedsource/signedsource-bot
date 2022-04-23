"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrivateVoice_1 = __importDefault(require("../classes/PrivateVoice"));
const Tickets_1 = __importDefault(require("../classes/Tickets"));
const Config_1 = __importDefault(require("../utils/Config"));
const Constants_1 = require("../utils/Constants");
const Logger_1 = __importDefault(require("../utils/Logger"));
exports.default = {
    name: 'interactionCreate',
    once: false,
    run: async (client, interaction) => {
        if (interaction.isSelectMenu()) {
            const asignableRoles = Config_1.default.roles.asignableRoles;
            for await (const role of asignableRoles) {
                const rl = interaction.guild.roles.cache.find((r) => r.id === role);
                if (interaction.member.roles.cache.find((r) => r.id == role)) {
                    interaction.member.roles.remove(rl);
                }
            }
            for await (const val of interaction.values) {
                const rl = interaction.guild.roles.cache.find((r) => r.id === val);
                if (!interaction.member.roles.cache.find((r) => r.id == val)) {
                    interaction.member.roles.add(rl);
                }
                else if (interaction.member.roles.cache.find((r) => r.id == val)) {
                    interaction.member.roles.add(rl);
                }
            }
            await interaction.reply({ content: 'Roles asigned.', ephemeral: true });
        }
        else if (interaction.isButton()) {
            switch (interaction.customId) {
                case "verificationBtn":
                    await interaction.deferUpdate();
                    await interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.id === Config_1.default.roles.member));
                    break;
                case "normalTicketBtn":
                    await interaction.deferUpdate();
                    new Tickets_1.default(interaction).create("support");
                    break;
                case "applyTicketBtn":
                    await interaction.deferUpdate();
                    new Tickets_1.default(interaction).create("apply");
                    break;
                case "closeTicketBtn":
                    await interaction.deferUpdate();
                    new Tickets_1.default(interaction).delete(interaction.channel);
                    break;
                case "privateVoiceBtn":
                    await interaction.deferUpdate();
                    new PrivateVoice_1.default(interaction).create(interaction.member, interaction.guild);
                    break;
                case "deletePrivateVoiceBtn":
                    await interaction.deferUpdate();
                    new PrivateVoice_1.default(interaction).delete(interaction.member, interaction.guild);
                    break;
            }
        }
        else if (interaction.isCommand()) {
            const cmd = interaction.client.commands.get(interaction.commandName);
            if (!cmd)
                return;
            try {
                await cmd.default.run(interaction);
            }
            catch (err) {
                Logger_1.default.error(err);
                return interaction.reply({
                    embeds: [Constants_1.errorEmbed],
                    ephemeral: true
                });
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rpb25DcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL2ludGVyYWN0aW9uQ3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsMkVBQW1EO0FBQ25ELGlFQUF3QztBQUN4Qyw2REFBcUM7QUFDckMsa0RBQWdEO0FBQ2hELDZEQUFxQztBQUVyQyxrQkFBZTtJQUNYLElBQUksRUFBRSxtQkFBbUI7SUFDekIsSUFBSSxFQUFFLEtBQUs7SUFDWCxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQWMsRUFBRSxXQUFnQixFQUFFLEVBQUU7UUFDNUMsSUFBSSxXQUFXLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDckMsTUFBTSxjQUFjLEdBQWEsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBRTdELElBQUksS0FBSyxFQUFFLE1BQU0sSUFBSSxJQUFJLGNBQWMsRUFBRTtnQkFDeEMsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQztnQkFFMUUsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFO29CQUNuRSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3BDO2FBQ0Q7WUFFRCxJQUFJLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUMzQyxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFD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VyxDQUFDLENBQUM7YUFDdEM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUNyQixNQUFNLEVBQUUsQ0FBQyxzQkFBVSxDQUFDO29CQUNwQixTQUFTLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFDO2FBQ047U0FDSjtJQUNMLENBQUM7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uSW50ZXJhY3Rpb24sIENsaWVudCwgQ29tbWFuZEludGVyYWN0aW9uLCBSb2xlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IFByaXZhdGVWb2ljZSBmcm9tIFwiLi4vY2xhc3Nlcy9Qcml2YXRlVm9pY2VcIjtcclxuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi4vY2xhc3Nlcy9UaWNrZXRzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL3V0aWxzL0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBlcnJvckVtYmVkIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi91dGlscy9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdpbnRlcmFjdGlvbkNyZWF0ZScsXHJcbiAgICBvbmNlOiBmYWxzZSxcclxuICAgIHJ1bjogYXN5bmMgKGNsaWVudDogQ2xpZW50LCBpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGludGVyYWN0aW9uLmlzU2VsZWN0TWVudSgpKSB7XHJcblx0XHRcdGNvbnN0IGFzaWduYWJsZVJvbGVzOiBzdHJpbmdbXSA9IGNvbmZpZy5yb2xlcy5hc2lnbmFibGVSb2xlcztcclxuXHJcblx0XHRcdGZvciBhd2FpdCAoY29uc3Qgcm9sZSBvZiBhc2lnbmFibGVSb2xlcykge1xyXG5cdFx0XHRcdGNvbnN0IHJsID0gaW50ZXJhY3Rpb24uZ3VpbGQucm9sZXMuY2FjaGUuZmluZCgocjogUm9sZSkgPT4gci5pZCA9PT0gcm9sZSk7XHJcblxyXG5cdFx0XHRcdGlmIChpbnRlcmFjdGlvbi5tZW1iZXIucm9sZXMuY2FjaGUuZmluZCgocjogUm9sZSkgPT4gci5pZCA9PSByb2xlKSkge1xyXG5cdFx0XHRcdFx0aW50ZXJhY3Rpb24ubWVtYmVyLnJvbGVzLnJlbW92ZShybCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgYXdhaXQgKGNvbnN0IHZhbCBvZiBpbnRlcmFjdGlvbi52YWx1ZXMpIHtcclxuXHRcdFx0XHRjb25zdCBybCA9IGludGVyYWN0aW9uLmd1aWxkLnJvbGVzLmNhY2hlLmZpbmQoKHI6IFJvbGUpID0+IHIuaWQgPT09IHZhbCk7XHJcblxyXG5cdFx0XHRcdGlmICghaW50ZXJhY3Rpb24ubWVtYmVyLnJvbGVzLmNhY2hlLmZpbmQoKHI6IFJvbGUpID0+IHIuaWQgPT0gdmFsKSkge1xyXG5cdFx0XHRcdFx0aW50ZXJhY3Rpb24ubWVtYmVyLnJvbGVzLmFkZChybCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbnRlcmFjdGlvbi5tZW1iZXIucm9sZXMuY2FjaGUuZmluZCgocjogUm9sZSkgPT4gci5pZCA9PSB2YWwpKSB7XHJcblx0XHRcdFx0XHRpbnRlcmFjdGlvbi5tZW1iZXIucm9sZXMuYWRkKHJsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgY29udGVudDogJ1JvbGVzIGFzaWduZWQuJywgZXBoZW1lcmFsOiB0cnVlIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb24uaXNCdXR0b24oKSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGludGVyYWN0aW9uLmN1c3RvbUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVyaWZpY2F0aW9uQnRuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5tZW1iZXIucm9sZXMuYWRkKGludGVyYWN0aW9uLmd1aWxkLnJvbGVzLmNhY2hlLmZpbmQociA9PiByLmlkID09PSBjb25maWcucm9sZXMubWVtYmVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9ybWFsVGlja2V0QnRuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVGlja2V0KGludGVyYWN0aW9uKS5jcmVhdGUoXCJzdXBwb3J0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFwcGx5VGlja2V0QnRuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVGlja2V0KGludGVyYWN0aW9uKS5jcmVhdGUoXCJhcHBseVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbG9zZVRpY2tldEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRpY2tldChpbnRlcmFjdGlvbikuZGVsZXRlKGludGVyYWN0aW9uLmNoYW5uZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInByaXZhdGVWb2ljZUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByaXZhdGVWb2ljZShpbnRlcmFjdGlvbikuY3JlYXRlKGludGVyYWN0aW9uLm1lbWJlciwgaW50ZXJhY3Rpb24uZ3VpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVByaXZhdGVWb2ljZUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByaXZhdGVWb2ljZShpbnRlcmFjdGlvbikuZGVsZXRlKGludGVyYWN0aW9uLm1lbWJlciwgaW50ZXJhY3Rpb24uZ3VpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvbi5pc0NvbW1hbmQoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbWQgPSBpbnRlcmFjdGlvbi5jbGllbnQuY29tbWFuZHMuZ2V0KGludGVyYWN0aW9uLmNvbW1hbmROYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFjbWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjbWQuZGVmYXVsdC5ydW4oaW50ZXJhY3Rpb24pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludGVyYWN0aW9uLnJlcGx5KHtcclxuICAgICAgICAgICAgICAgICAgICBlbWJlZHM6IFtlcnJvckVtYmVkXSxcclxuICAgICAgICAgICAgICAgICAgICBlcGhlbWVyYWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
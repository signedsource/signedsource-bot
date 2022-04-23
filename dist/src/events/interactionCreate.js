"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrivateVoice_1 = __importDefault(require("../classes/PrivateVoice"));
const Tickets_1 = __importDefault(require("../classes/Tickets"));
const Verification_1 = __importDefault(require("../classes/Verification"));
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
                    await interaction.deferReply({ ephemeral: true });
                    new Verification_1.default(interaction).start();
                    break;
                case "verificationCodeBtn-1":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("1");
                    break;
                case "verificationCodeBtn-2":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("2");
                    break;
                case "verificationCodeBtn-3":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("3");
                    break;
                case "verificationCodeBtn-4":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("4");
                    break;
                case "verificationCodeBtn-5":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("5");
                    break;
                case "verificationCodeBtn-6":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("6");
                    break;
                case "verificationCodeBtn-7":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("7");
                    break;
                case "verificationCodeBtn-8":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("8");
                    break;
                case "verificationCodeBtn-9":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("9");
                    break;
                case "verificationCodeBtn-0":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).update("0");
                    break;
                case "verificationCodeBtn-done":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).verify();
                    break;
                case "verificationCodeBtn-clear":
                    await interaction.deferUpdate();
                    new Verification_1.default(interaction).reset();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rpb25DcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL2ludGVyYWN0aW9uQ3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsMkVBQW1EO0FBQ25ELGlFQUF3QztBQUN4QywyRUFBbUQ7QUFDbkQsNkRBQXFDO0FBQ3JDLGtEQUFnRDtBQUNoRCw2REFBcUM7QUFFckMsa0JBQWU7SUFDWCxJQUFJLEVBQUUsbUJBQW1CO0lBQ3pCLElBQUksRUFBRSxLQUFLO0lBQ1gsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFjLEVBQUUsV0FBZ0IsRUFBRSxFQUFFO1FBQzVDLElBQUksV0FBVyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3JDLE1BQU0sY0FBYyxHQUFhLGdCQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUU3RCxJQUFJLEtBQUssRUFBRSxNQUFNLElBQUksSUFBSSxjQUFjLEVBQUU7Z0JBQ3hDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBRTFFLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDbkUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQzthQUNEO1lBRUQsSUFBSSxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDM0MsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxD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QUM7b0JBQ3BELE1BQU07Z0JBQ1YsS0FBSyxpQkFBaUI7b0JBQ2xCLE1BQU0sV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNoQyxJQUFJLHNCQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1RSxNQUFNO2dCQUNWLEtBQUssdUJBQXVCO29CQUN4QixNQUFNLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxzQkFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUUsTUFBTTthQUNiO1NBQ0o7YUFBTSxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNoQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxHQUFHO2dCQUFFLE9BQU87WUFFakIsSUFBSTtnQkFDQSxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3RDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFDckIsTUFBTSxFQUFFLENBQUMsc0JBQVUsQ0FBQztvQkFDcEIsU0FBUyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQzthQUNOO1NBQ0o7SUFDTCxDQUFDO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkludGVyYWN0aW9uLCBDbGllbnQsIENvbW1hbmRJbnRlcmFjdGlvbiwgUm9sZSwgU2VsZWN0TWVudUludGVyYWN0aW9uIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IFByaXZhdGVWb2ljZSBmcm9tIFwiLi4vY2xhc3Nlcy9Qcml2YXRlVm9pY2VcIjtcclxuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi4vY2xhc3Nlcy9UaWNrZXRzXCI7XHJcbmltcG9ydCBWZXJpZmljYXRpb24gZnJvbSBcIi4uL2NsYXNzZXMvVmVyaWZpY2F0aW9uXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL3V0aWxzL0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBlcnJvckVtYmVkIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi91dGlscy9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdpbnRlcmFjdGlvbkNyZWF0ZScsXHJcbiAgICBvbmNlOiBmYWxzZSxcclxuICAgIHJ1bjogYXN5bmMgKGNsaWVudDogQ2xpZW50LCBpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGludGVyYWN0aW9uLmlzU2VsZWN0TWVudSgpKSB7XHJcblx0XHRcdGNvbnN0IGFzaWduYWJsZVJvbGVzOiBzdHJpbmdbXSA9IGNvbmZpZy5yb2xlcy5hc2lnbmFibGVSb2xlcztcclxuXHJcblx0XHRcdGZvciBhd2FpdCAoY29uc3Qgcm9sZSBvZiBhc2lnbmFibGVSb2xlcykge1xyXG5cdFx0XHRcdGNvbnN0IHJsID0gaW50ZXJhY3Rpb24uZ3VpbGQucm9sZXMuY2FjaGUuZmluZCgocjogUm9sZSkgPT4gci5pZCA9PT0gcm9sZSk7XHJcblxyXG5cdFx0XHRcdGlmIChpbnRlcmFjdGlvbi5tZW1iZXIucm9sZXMuY2FjaGUuZmluZCgocjogUm9sZSkgPT4gci5pZCA9PSByb2xlKSkge1xyXG5cdFx0XHRcdFx0aW50ZXJhY3Rpb24ubWVtYmVyLnJvbGVzLnJlbW92ZShybCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgYXdhaXQgKGNvbnN0IHZhbCBvZiBpbnRlcmFjdGlvbi52YWx1ZXMpIHtcclxuXHRcdFx0XHRjb25zdCBybCA9IGludGVyYWN0aW9uLmd1aWxkLnJvbGVzLmNhY2hlLmZpbmQoKHI6IFJvbGUpID0+IHIuaWQgPT09IHZhbCk7XHJcblxyXG5cdFx0XHRcdGlmICghaW50ZXJhY3Rpb24ubWVtYmVyLnJvbGVzLmNhY2hlLmZpbmQoKHI6IFJvbGUpID0+IHIuaWQgPT0gdmFsKSkge1xyXG5cdFx0XHRcdFx0aW50ZXJhY3Rpb24ubWVtYmVyLnJvbGVzLmFkZChybCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbnRlcmFjdGlvbi5tZW1iZXIucm9sZXMuY2FjaGUuZmluZCgocjogUm9sZSkgPT4gci5pZCA9PSB2YWwpKSB7XHJcblx0XHRcdFx0XHRpbnRlcmFjdGlvbi5tZW1iZXIucm9sZXMuYWRkKHJsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgY29udGVudDogJ1JvbGVzIGFzaWduZWQuJywgZXBoZW1lcmFsOiB0cnVlIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb24uaXNCdXR0b24oKSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGludGVyYWN0aW9uLmN1c3RvbUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVyaWZpY2F0aW9uQnRuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJSZXBseSh7IGVwaGVtZXJhbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVyaWZpY2F0aW9uKGludGVyYWN0aW9uKS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInZlcmlmaWNhdGlvbkNvZGVCdG4tMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlcmlmaWNhdGlvbihpbnRlcmFjdGlvbikudXBkYXRlKFwiMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJpZmljYXRpb25Db2RlQnRuLTJcIjpcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5kZWZlclVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZXJpZmljYXRpb24oaW50ZXJhY3Rpb24pLnVwZGF0ZShcIjJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVyaWZpY2F0aW9uQ29kZUJ0bi0zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVyaWZpY2F0aW9uKGludGVyYWN0aW9uKS51cGRhdGUoXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInZlcmlmaWNhdGlvbkNvZGVCdG4tNFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlcmlmaWNhdGlvbihpbnRlcmFjdGlvbikudXBkYXRlKFwiNFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJpZmljYXRpb25Db2RlQnRuLTVcIjpcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5kZWZlclVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZXJpZmljYXRpb24oaW50ZXJhY3Rpb24pLnVwZGF0ZShcIjVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVyaWZpY2F0aW9uQ29kZUJ0bi02XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVyaWZpY2F0aW9uKGludGVyYWN0aW9uKS51cGRhdGUoXCI2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInZlcmlmaWNhdGlvbkNvZGVCdG4tN1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlcmlmaWNhdGlvbihpbnRlcmFjdGlvbikudXBkYXRlKFwiN1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJpZmljYXRpb25Db2RlQnRuLThcIjpcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5kZWZlclVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZXJpZmljYXRpb24oaW50ZXJhY3Rpb24pLnVwZGF0ZShcIjhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVyaWZpY2F0aW9uQ29kZUJ0bi05XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVyaWZpY2F0aW9uKGludGVyYWN0aW9uKS51cGRhdGUoXCI5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInZlcmlmaWNhdGlvbkNvZGVCdG4tMFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlcmlmaWNhdGlvbihpbnRlcmFjdGlvbikudXBkYXRlKFwiMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJpZmljYXRpb25Db2RlQnRuLWRvbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5kZWZlclVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZXJpZmljYXRpb24oaW50ZXJhY3Rpb24pLnZlcmlmeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInZlcmlmaWNhdGlvbkNvZGVCdG4tY2xlYXJcIjpcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5kZWZlclVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZXJpZmljYXRpb24oaW50ZXJhY3Rpb24pLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9ybWFsVGlja2V0QnRuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVGlja2V0KGludGVyYWN0aW9uKS5jcmVhdGUoXCJzdXBwb3J0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFwcGx5VGlja2V0QnRuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24uZGVmZXJVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVGlja2V0KGludGVyYWN0aW9uKS5jcmVhdGUoXCJhcHBseVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbG9zZVRpY2tldEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRpY2tldChpbnRlcmFjdGlvbikuZGVsZXRlKGludGVyYWN0aW9uLmNoYW5uZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInByaXZhdGVWb2ljZUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByaXZhdGVWb2ljZShpbnRlcmFjdGlvbikuY3JlYXRlKGludGVyYWN0aW9uLm1lbWJlciwgaW50ZXJhY3Rpb24uZ3VpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVByaXZhdGVWb2ljZUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmRlZmVyVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByaXZhdGVWb2ljZShpbnRlcmFjdGlvbikuZGVsZXRlKGludGVyYWN0aW9uLm1lbWJlciwgaW50ZXJhY3Rpb24uZ3VpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvbi5pc0NvbW1hbmQoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbWQgPSBpbnRlcmFjdGlvbi5jbGllbnQuY29tbWFuZHMuZ2V0KGludGVyYWN0aW9uLmNvbW1hbmROYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFjbWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjbWQuZGVmYXVsdC5ydW4oaW50ZXJhY3Rpb24pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludGVyYWN0aW9uLnJlcGx5KHtcclxuICAgICAgICAgICAgICAgICAgICBlbWJlZHM6IFtlcnJvckVtYmVkXSxcclxuICAgICAgICAgICAgICAgICAgICBlcGhlbWVyYWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
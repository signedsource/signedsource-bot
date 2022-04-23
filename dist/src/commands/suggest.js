"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
const node_util_1 = __importDefault(require("node:util"));
const Config_1 = __importDefault(require("../utils/Config"));
const Constants_1 = require("../utils/Constants");
exports.default = {
    data: new builders_1.SlashCommandBuilder()
        .setName("suggest")
        .setDescription("Makes a suggestion")
        .addStringOption(opt => opt
        .setName("suggestion")
        .setDescription("The suggestion to submit")
        .setRequired(true)),
    run: async (interaction) => {
        if (interaction.channel.id === Config_1.default.channels.commands) {
            const ch = interaction.client.channels.cache.find(c => c.id === Config_1.default.channels.suggestions);
            const suggestionsEmbed = new discord_js_1.MessageEmbed()
                .setTitle(Config_1.default.messages.suggestionsEmbedTitle)
                .setDescription(node_util_1.default.format(Config_1.default.messages.suggestionsEmbedDescription, `<@${interaction.user.id}>`, interaction.options.get("suggestion").value))
                .setColor("BLUE")
                .setTimestamp();
            await ch.send({ embeds: [suggestionsEmbed] }).then(async (m) => {
                await m.react("⬆️");
                await m.react("⬇️");
            });
            await interaction.reply({ embeds: [Constants_1.suggestionSentEmbed], ephemeral: true });
        }
        else {
            interaction.reply({
                embeds: [Constants_1.noPermsEmbed],
                ephemeral: true
            });
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9zdWdnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBEO0FBQzFELDJDQUEyRTtBQUMzRSwwREFBNkI7QUFDN0IsNkRBQXFDO0FBQ3JDLGtEQUF1RTtBQUV2RSxrQkFBZTtJQUNYLElBQUksRUFBRSxJQUFJLDhCQUFtQixFQUFFO1NBQzFCLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDbEIsY0FBYyxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUc7U0FDdEIsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUNyQixjQUFjLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBK0IsRUFBRSxFQUFFO1FBQzNDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssZ0JBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3JELE1BQU0sRUFBRSxHQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLGdCQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBaUIsQ0FBQztZQUU5RyxNQUFNLGdCQUFnQixHQUFpQixJQUFJLHlCQUFZLEVBQUU7aUJBQ3BELFFBQVEsQ0FBQyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDL0MsY0FBYyxDQUFDLG1CQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFNLENBQUMsUUFBUSxDQUFDLDJCQUEyQixFQUFFLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEosUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDaEIsWUFBWSxFQUFFLENBQUM7WUFFcEIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRTtnQkFDekQsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQywrQkFBbUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQy9FO2FBQU07WUFDSCxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNkLE1BQU0sRUFBRSxDQUFFLHdCQUFZLENBQUU7Z0JBQ3hCLFNBQVMsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGFzaENvbW1hbmRCdWlsZGVyIH0gZnJvbSBcIkBkaXNjb3JkanMvYnVpbGRlcnNcIjtcclxuaW1wb3J0IHsgQ29tbWFuZEludGVyYWN0aW9uLCBNZXNzYWdlRW1iZWQsIFRleHRDaGFubmVsIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHV0aWwgZnJvbSBcIm5vZGU6dXRpbFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi91dGlscy9Db25maWdcIjtcclxuaW1wb3J0IHsgbm9QZXJtc0VtYmVkLCBzdWdnZXN0aW9uU2VudEVtYmVkIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTogbmV3IFNsYXNoQ29tbWFuZEJ1aWxkZXIoKVxyXG4gICAgICAgIC5zZXROYW1lKFwic3VnZ2VzdFwiKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihcIk1ha2VzIGEgc3VnZ2VzdGlvblwiKVxyXG4gICAgICAgIC5hZGRTdHJpbmdPcHRpb24ob3B0ID0+IG9wdFxyXG4gICAgICAgICAgICAuc2V0TmFtZShcInN1Z2dlc3Rpb25cIilcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKFwiVGhlIHN1Z2dlc3Rpb24gdG8gc3VibWl0XCIpXHJcbiAgICAgICAgICAgIC5zZXRSZXF1aXJlZCh0cnVlKSksXHJcbiAgICBydW46IGFzeW5jIChpbnRlcmFjdGlvbjogQ29tbWFuZEludGVyYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGludGVyYWN0aW9uLmNoYW5uZWwuaWQgPT09IGNvbmZpZy5jaGFubmVscy5jb21tYW5kcykge1xyXG4gICAgICAgICAgICBjb25zdCBjaCA9IChpbnRlcmFjdGlvbi5jbGllbnQuY2hhbm5lbHMuY2FjaGUuZmluZChjID0+IGMuaWQgPT09IGNvbmZpZy5jaGFubmVscy5zdWdnZXN0aW9ucykgYXMgVGV4dENoYW5uZWwpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnNFbWJlZDogTWVzc2FnZUVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUoY29uZmlnLm1lc3NhZ2VzLnN1Z2dlc3Rpb25zRW1iZWRUaXRsZSlcclxuICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbih1dGlsLmZvcm1hdChjb25maWcubWVzc2FnZXMuc3VnZ2VzdGlvbnNFbWJlZERlc2NyaXB0aW9uLCBgPEAke2ludGVyYWN0aW9uLnVzZXIuaWR9PmAsIGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KFwic3VnZ2VzdGlvblwiKS52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAuc2V0Q29sb3IoXCJCTFVFXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGltZXN0YW1wKCk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBjaC5zZW5kKHsgZW1iZWRzOiBbc3VnZ2VzdGlvbnNFbWJlZF0gfSkudGhlbihhc3luYyBtID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IG0ucmVhY3QoXCLirIbvuI9cIik7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBtLnJlYWN0KFwi4qyH77iPXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgZW1iZWRzOiBbc3VnZ2VzdGlvblNlbnRFbWJlZF0sIGVwaGVtZXJhbDogdHJ1ZSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5yZXBseSh7XHJcbiAgICAgICAgICAgICAgICBlbWJlZHM6IFsgbm9QZXJtc0VtYmVkIF0sXHJcbiAgICAgICAgICAgICAgICBlcGhlbWVyYWw6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
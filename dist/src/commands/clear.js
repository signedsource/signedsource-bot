"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const node_util_1 = __importDefault(require("node:util"));
const Config_1 = __importDefault(require("../utils/Config"));
const Constants_1 = require("../utils/Constants");
exports.default = {
    data: new builders_1.SlashCommandBuilder()
        .setName('clear')
        .setDescription('Wipes out a specified amount of messages')
        .addNumberOption(opt => opt
        .setName('messages')
        .setDescription('Amount of messages to wipe out')
        .setRequired(true)),
    run: async (interaction) => {
        if (interaction.member.permissions.has("DELETE_MESSAGES")) {
            const ch = interaction.client.channels.cache.find(c => c.id === interaction.channelId);
            if (interaction.options.get("messages").value <= 0) {
                await interaction.reply({ content: Config_1.default.messages.minimumOfDeletedMessages, ephemeral: true });
            }
            else if (interaction.options.get("messages").value > 100) {
                await ch.bulkDelete(100);
                await interaction.reply({ content: node_util_1.default.format(Config_1.default.messages.deletedMessages, "100"), ephemeral: true });
            }
            else {
                await ch.bulkDelete(interaction.options.get("messages").value);
                await interaction.reply({ content: node_util_1.default.format(Config_1.default.messages.deletedMessages, interaction.options.get("messages").value), ephemeral: true });
            }
        }
        else {
            interaction.reply({
                embeds: [Constants_1.noPermsEmbed],
                ephemeral: true
            });
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvY2xlYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEQ7QUFDMUQsMERBQTZCO0FBQzdCLDZEQUFxQztBQUNyQyxrREFBa0Q7QUFFbEQsa0JBQWU7SUFDWCxJQUFJLEVBQUUsSUFBSSw4QkFBbUIsRUFBRTtTQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ2hCLGNBQWMsQ0FBQywwQ0FBMEMsQ0FBQztTQUMxRCxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHO1NBQ3RCLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDbkIsY0FBYyxDQUFDLGdDQUFnQyxDQUFDO1NBQ2hELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixHQUFHLEVBQUUsS0FBSyxFQUFFLFdBQWdCLEVBQUUsRUFBRTtRQUM1QixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3ZELE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV2RixJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBTSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNuRztpQkFBTSxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ3hELE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzthQUM3RztpQkFBTTtnQkFDSCxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNFLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDckk7U0FDSjthQUFNO1lBQ0gsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDZCxNQUFNLEVBQUUsQ0FBRSx3QkFBWSxDQUFFO2dCQUN4QixTQUFTLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2xhc2hDb21tYW5kQnVpbGRlciB9IGZyb20gXCJAZGlzY29yZGpzL2J1aWxkZXJzXCI7XHJcbmltcG9ydCB1dGlsIGZyb20gXCJub2RlOnV0aWxcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vdXRpbHMvQ29uZmlnXCI7XHJcbmltcG9ydCB7IG5vUGVybXNFbWJlZCB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IG5ldyBTbGFzaENvbW1hbmRCdWlsZGVyKClcclxuICAgICAgICAuc2V0TmFtZSgnY2xlYXInKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignV2lwZXMgb3V0IGEgc3BlY2lmaWVkIGFtb3VudCBvZiBtZXNzYWdlcycpXHJcbiAgICAgICAgLmFkZE51bWJlck9wdGlvbihvcHQgPT4gb3B0XHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdtZXNzYWdlcycpXHJcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbignQW1vdW50IG9mIG1lc3NhZ2VzIHRvIHdpcGUgb3V0JylcclxuICAgICAgICAgICAgLnNldFJlcXVpcmVkKHRydWUpKSxcclxuICAgIHJ1bjogYXN5bmMgKGludGVyYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoaW50ZXJhY3Rpb24ubWVtYmVyLnBlcm1pc3Npb25zLmhhcyhcIkRFTEVURV9NRVNTQUdFU1wiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaCA9IGludGVyYWN0aW9uLmNsaWVudC5jaGFubmVscy5jYWNoZS5maW5kKGMgPT4gYy5pZCA9PT0gaW50ZXJhY3Rpb24uY2hhbm5lbElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGlvbi5vcHRpb25zLmdldChcIm1lc3NhZ2VzXCIpLnZhbHVlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgY29udGVudDogY29uZmlnLm1lc3NhZ2VzLm1pbmltdW1PZkRlbGV0ZWRNZXNzYWdlcywgZXBoZW1lcmFsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KFwibWVzc2FnZXNcIikudmFsdWUgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNoLmJ1bGtEZWxldGUoMTAwKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgY29udGVudDogdXRpbC5mb3JtYXQoY29uZmlnLm1lc3NhZ2VzLmRlbGV0ZWRNZXNzYWdlcywgXCIxMDBcIiksIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY2guYnVsa0RlbGV0ZShpbnRlcmFjdGlvbi5vcHRpb25zLmdldChcIm1lc3NhZ2VzXCIpLnZhbHVlKTtcclxuXHRcdFx0XHRhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7IGNvbnRlbnQ6IHV0aWwuZm9ybWF0KGNvbmZpZy5tZXNzYWdlcy5kZWxldGVkTWVzc2FnZXMsIGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0KFwibWVzc2FnZXNcIikudmFsdWUpLCBlcGhlbWVyYWw6IHRydWV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludGVyYWN0aW9uLnJlcGx5KHtcclxuICAgICAgICAgICAgICAgIGVtYmVkczogWyBub1Blcm1zRW1iZWQgXSxcclxuICAgICAgICAgICAgICAgIGVwaGVtZXJhbDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
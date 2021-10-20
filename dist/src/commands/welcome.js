"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const builders_1 = require("@discordjs/builders");
const Config_1 = __importDefault(require("../utils/Config"));
exports.default = {
    data: new builders_1.SlashCommandBuilder()
        .setName("welcome")
        .setDescription("Sends the welcome message & pings the user")
        .addUserOption(opt => opt
        .setName("target")
        .setDescription("The member to welcome")
        .setRequired(true)),
    run: async (interaction) => {
        const member = interaction.options.getUser('target');
        const welcomeEmbed = new discord_js_1.MessageEmbed()
            .setTitle("Welcome!")
            .setDescription(Config_1.default.messages.welcomeUserCommand.join("\n"))
            .setColor("RANDOM")
            .setTimestamp();
        const doneEmbed = new discord_js_1.MessageEmbed()
            .setTitle("Done :white_check_mark:!")
            .setDescription("The welcome message has been sent!")
            .setColor("GREEN")
            .setTimestamp();
        await interaction.reply({ embeds: [doneEmbed], ephemeral: true });
        await interaction.channel.send({ content: `<@${member.id}>`, embeds: [welcomeEmbed] });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQW9FO0FBQ3BFLGtEQUEwRDtBQUMxRCw2REFBcUM7QUFFckMsa0JBQWU7SUFDWCxJQUFJLEVBQUUsSUFBSSw4QkFBbUIsRUFBRTtTQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ2xCLGNBQWMsQ0FBQyw0Q0FBNEMsQ0FBQztTQUM1RCxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHO1NBQ3BCLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDakIsY0FBYyxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixHQUFHLEVBQUUsS0FBSyxFQUFFLFdBQStCLEVBQUUsRUFBRTtRQUMzQyxNQUFNLE1BQU0sR0FBUyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzRCxNQUFNLFlBQVksR0FBaUIsSUFBSSx5QkFBWSxFQUFFO2FBQ2hELFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDcEIsY0FBYyxDQUFDLGdCQUFNLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLFlBQVksRUFBRSxDQUFDO1FBRXBCLE1BQU0sU0FBUyxHQUFpQixJQUFJLHlCQUFZLEVBQUU7YUFDN0MsUUFBUSxDQUFDLDBCQUEwQixDQUFDO2FBQ3BDLGNBQWMsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNwRCxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQ2pCLFlBQVksRUFBRSxDQUFDO1FBRXBCLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEludGVyYWN0aW9uLCBNZXNzYWdlRW1iZWQsIFVzZXIgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBTbGFzaENvbW1hbmRCdWlsZGVyIH0gZnJvbSBcIkBkaXNjb3JkanMvYnVpbGRlcnNcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vdXRpbHMvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBuZXcgU2xhc2hDb21tYW5kQnVpbGRlcigpXHJcbiAgICAgICAgLnNldE5hbWUoXCJ3ZWxjb21lXCIpXHJcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKFwiU2VuZHMgdGhlIHdlbGNvbWUgbWVzc2FnZSAmIHBpbmdzIHRoZSB1c2VyXCIpXHJcbiAgICAgICAgLmFkZFVzZXJPcHRpb24ob3B0ID0+IG9wdFxyXG4gICAgICAgICAgICAuc2V0TmFtZShcInRhcmdldFwiKVxyXG4gICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJUaGUgbWVtYmVyIHRvIHdlbGNvbWVcIilcclxuICAgICAgICAgICAgLnNldFJlcXVpcmVkKHRydWUpKSxcclxuICAgIHJ1bjogYXN5bmMgKGludGVyYWN0aW9uOiBDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCBtZW1iZXI6IFVzZXIgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldFVzZXIoJ3RhcmdldCcpO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWxjb21lRW1iZWQ6IE1lc3NhZ2VFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0VGl0bGUoXCJXZWxjb21lIVwiKVxyXG4gICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oY29uZmlnLm1lc3NhZ2VzLndlbGNvbWVVc2VyQ29tbWFuZC5qb2luKFwiXFxuXCIpKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuICAgICAgICAgICAgLnNldFRpbWVzdGFtcCgpO1xyXG5cclxuICAgICAgICBjb25zdCBkb25lRW1iZWQ6IE1lc3NhZ2VFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0VGl0bGUoXCJEb25lIDp3aGl0ZV9jaGVja19tYXJrOiFcIilcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKFwiVGhlIHdlbGNvbWUgbWVzc2FnZSBoYXMgYmVlbiBzZW50IVwiKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJHUkVFTlwiKVxyXG4gICAgICAgICAgICAuc2V0VGltZXN0YW1wKCk7XHJcblxyXG4gICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgZW1iZWRzOiBbZG9uZUVtYmVkXSwgZXBoZW1lcmFsOiB0cnVlIH0pO1xyXG4gICAgICAgIGF3YWl0IGludGVyYWN0aW9uLmNoYW5uZWwuc2VuZCh7IGNvbnRlbnQ6IGA8QCR7bWVtYmVyLmlkfT5gLCBlbWJlZHM6IFt3ZWxjb21lRW1iZWRdIH0pO1xyXG4gICAgfVxyXG59Il19
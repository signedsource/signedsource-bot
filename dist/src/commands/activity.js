"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
const Activity_1 = __importDefault(require("../classes/Activity"));
exports.default = {
    data: new builders_1.SlashCommandBuilder()
        .setName("activity")
        .setDescription("Add's up a activity to a channel")
        .addChannelOption(opt => opt
        .setName("channel")
        .setDescription("The voice channel that will be used for the activity")
        //@ts-ignore
        .addChannelType(2 /* GuildVoice */)
        .setRequired(true))
        .addStringOption(opt => opt
        .setName("application")
        .setDescription("Select the application to use")
        .addChoice("Youtube Together", "755600276941176913")
        .addChoice("Youtube Together (Development Release)", "880218832743055411")
        .addChoice("Fishington", "814288819477020702")
        .addChoice("Chess In The Park", "832012774040141894")
        .addChoice("Chess In The Park (Development Release)", "832012586023256104")
        .addChoice("Betrayal", "773336526917861400")
        .addChoice("Poker Night", "755827207812677713")
        .addChoice("Letter Tile", "879863686565621790")
        .addChoice("Word Snack", "879863976006127627")
        .addChoice("Doodle Crew", "878067389634314250")
        .setRequired(true)),
    run: async (interaction) => {
        const client = interaction.client;
        const channel = interaction.options.getChannel("channel");
        const application = interaction.options.get("application").value;
        const invite = await new Activity_1.default(client).create(application, channel);
        if (invite) {
            const inviteEmbed = new discord_js_1.MessageEmbed()
                .setTitle("Done!")
                //@ts-ignore
                .setDescription(`Here you have the invite to use the [application](https://discord.com/invite/${invite.code})`)
                .setColor("GREEN")
                .setTimestamp();
            await interaction.reply({ embeds: [inviteEmbed] });
        }
        else {
            const errorEmbed = new discord_js_1.MessageEmbed()
                .setTitle(":x: | An error ocurred")
                .setDescription("An error ocurred while gathering the invite code, please try again in a few moments")
                .setColor("RED")
                .setTimestamp();
            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvYWN0aXZpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEQ7QUFFMUQsMkNBQXNFO0FBQ3RFLG1FQUEyQztBQUUzQyxrQkFBZTtJQUNYLElBQUksRUFBRSxJQUFJLDhCQUFtQixFQUFFO1NBQzFCLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDbkIsY0FBYyxDQUFDLGtDQUFrQyxDQUFDO1NBQ2xELGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRztTQUN2QixPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ2xCLGNBQWMsQ0FBQyxzREFBc0QsQ0FBQztRQUN2RSxZQUFZO1NBQ1gsY0FBYyxvQkFBd0I7U0FDdEMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUc7U0FDdEIsT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUN0QixjQUFjLENBQUMsK0JBQStCLENBQUM7U0FDL0MsU0FBUyxDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDO1NBQ25ELFNBQVMsQ0FBQyx3Q0FBd0MsRUFBRSxvQkFBb0IsQ0FBQztTQUN6RSxTQUFTLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDO1NBQzdDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQztTQUNwRCxTQUFTLENBQUMseUNBQXlDLEVBQUUsb0JBQW9CLENBQUM7U0FDMUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQztTQUMzQyxTQUFTLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDO1NBQzlDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUM7U0FDOUMsU0FBUyxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztTQUM3QyxTQUFTLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDO1NBQzlDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FDckI7SUFDTCxHQUFHLEVBQUUsS0FBSyxFQUFFLFdBQStCLEVBQUUsRUFBRTtRQUMzQyxNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzFDLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXZFLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxXQUFXLEdBQWlCLElBQUkseUJBQVksRUFBRTtpQkFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsWUFBWTtpQkFDWCxjQUFjLENBQUMsZ0ZBQWdGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztpQkFDOUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsWUFBWSxFQUFFLENBQUM7WUFFcEIsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDSCxNQUFNLFVBQVUsR0FBaUIsSUFBSSx5QkFBWSxFQUFFO2lCQUM5QyxRQUFRLENBQUMsd0JBQXdCLENBQUM7aUJBQ2xDLGNBQWMsQ0FBQyxxRkFBcUYsQ0FBQztpQkFDckcsUUFBUSxDQUFDLEtBQUssQ0FBQztpQkFDZixZQUFZLEVBQUUsQ0FBQztZQUVwQixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtTQUNyRTtJQUNMLENBQUM7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2xhc2hDb21tYW5kQnVpbGRlciB9IGZyb20gXCJAZGlzY29yZGpzL2J1aWxkZXJzXCI7XHJcbmltcG9ydCB7IENoYW5uZWxUeXBlIH0gZnJvbSAnZGlzY29yZC1hcGktdHlwZXMvdjknO1xyXG5pbXBvcnQgeyBDbGllbnQsIENvbW1hbmRJbnRlcmFjdGlvbiwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IEFjdGl2aXR5IGZyb20gXCIuLi9jbGFzc2VzL0FjdGl2aXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBuZXcgU2xhc2hDb21tYW5kQnVpbGRlcigpXHJcbiAgICAgICAgLnNldE5hbWUoXCJhY3Rpdml0eVwiKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihcIkFkZCdzIHVwIGEgYWN0aXZpdHkgdG8gYSBjaGFubmVsXCIpXHJcbiAgICAgICAgLmFkZENoYW5uZWxPcHRpb24ob3B0ID0+IG9wdFxyXG4gICAgICAgICAgICAuc2V0TmFtZShcImNoYW5uZWxcIilcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKFwiVGhlIHZvaWNlIGNoYW5uZWwgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHRoZSBhY3Rpdml0eVwiKVxyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgLmFkZENoYW5uZWxUeXBlKENoYW5uZWxUeXBlLkd1aWxkVm9pY2UpXHJcbiAgICAgICAgICAgIC5zZXRSZXF1aXJlZCh0cnVlKSlcclxuICAgICAgICAuYWRkU3RyaW5nT3B0aW9uKG9wdCA9PiBvcHRcclxuICAgICAgICAgICAgLnNldE5hbWUoXCJhcHBsaWNhdGlvblwiKVxyXG4gICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJTZWxlY3QgdGhlIGFwcGxpY2F0aW9uIHRvIHVzZVwiKVxyXG4gICAgICAgICAgICAuYWRkQ2hvaWNlKFwiWW91dHViZSBUb2dldGhlclwiLCBcIjc1NTYwMDI3Njk0MTE3NjkxM1wiKVxyXG4gICAgICAgICAgICAuYWRkQ2hvaWNlKFwiWW91dHViZSBUb2dldGhlciAoRGV2ZWxvcG1lbnQgUmVsZWFzZSlcIiwgXCI4ODAyMTg4MzI3NDMwNTU0MTFcIilcclxuICAgICAgICAgICAgLmFkZENob2ljZShcIkZpc2hpbmd0b25cIiwgXCI4MTQyODg4MTk0NzcwMjA3MDJcIilcclxuICAgICAgICAgICAgLmFkZENob2ljZShcIkNoZXNzIEluIFRoZSBQYXJrXCIsIFwiODMyMDEyNzc0MDQwMTQxODk0XCIpXHJcbiAgICAgICAgICAgIC5hZGRDaG9pY2UoXCJDaGVzcyBJbiBUaGUgUGFyayAoRGV2ZWxvcG1lbnQgUmVsZWFzZSlcIiwgXCI4MzIwMTI1ODYwMjMyNTYxMDRcIilcclxuICAgICAgICAgICAgLmFkZENob2ljZShcIkJldHJheWFsXCIsIFwiNzczMzM2NTI2OTE3ODYxNDAwXCIpXHJcbiAgICAgICAgICAgIC5hZGRDaG9pY2UoXCJQb2tlciBOaWdodFwiLCBcIjc1NTgyNzIwNzgxMjY3NzcxM1wiKVxyXG4gICAgICAgICAgICAuYWRkQ2hvaWNlKFwiTGV0dGVyIFRpbGVcIiwgXCI4Nzk4NjM2ODY1NjU2MjE3OTBcIilcclxuICAgICAgICAgICAgLmFkZENob2ljZShcIldvcmQgU25hY2tcIiwgXCI4Nzk4NjM5NzYwMDYxMjc2MjdcIilcclxuICAgICAgICAgICAgLmFkZENob2ljZShcIkRvb2RsZSBDcmV3XCIsIFwiODc4MDY3Mzg5NjM0MzE0MjUwXCIpXHJcbiAgICAgICAgICAgIC5zZXRSZXF1aXJlZCh0cnVlKVxyXG4gICAgICAgICksXHJcbiAgICBydW46IGFzeW5jIChpbnRlcmFjdGlvbjogQ29tbWFuZEludGVyYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50OiBDbGllbnQgPSBpbnRlcmFjdGlvbi5jbGllbnQ7XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IGludGVyYWN0aW9uLm9wdGlvbnMuZ2V0Q2hhbm5lbChcImNoYW5uZWxcIik7XHJcbiAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldChcImFwcGxpY2F0aW9uXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBpbnZpdGUgPSBhd2FpdCBuZXcgQWN0aXZpdHkoY2xpZW50KS5jcmVhdGUoYXBwbGljYXRpb24sIGNoYW5uZWwpO1xyXG5cclxuICAgICAgICBpZiAoaW52aXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGludml0ZUVtYmVkOiBNZXNzYWdlRW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZShcIkRvbmUhXCIpXHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgSGVyZSB5b3UgaGF2ZSB0aGUgaW52aXRlIHRvIHVzZSB0aGUgW2FwcGxpY2F0aW9uXShodHRwczovL2Rpc2NvcmQuY29tL2ludml0ZS8ke2ludml0ZS5jb2RlfSlgKVxyXG4gICAgICAgICAgICAgICAgLnNldENvbG9yKFwiR1JFRU5cIilcclxuICAgICAgICAgICAgICAgIC5zZXRUaW1lc3RhbXAoKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgZW1iZWRzOiBbaW52aXRlRW1iZWRdIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRW1iZWQ6IE1lc3NhZ2VFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKFwiOng6IHwgQW4gZXJyb3Igb2N1cnJlZFwiKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKFwiQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBnYXRoZXJpbmcgdGhlIGludml0ZSBjb2RlLCBwbGVhc2UgdHJ5IGFnYWluIGluIGEgZmV3IG1vbWVudHNcIilcclxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIlJFRFwiKVxyXG4gICAgICAgICAgICAgICAgLnNldFRpbWVzdGFtcCgpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoeyBlbWJlZHM6IFtlcnJvckVtYmVkXSwgZXBoZW1lcmFsOiB0cnVlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
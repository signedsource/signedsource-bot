"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const Constants_1 = require("../utils/Constants");
exports.default = {
    data: new builders_1.SlashCommandBuilder()
        .setName("nuke")
        .setDescription("Deletes the channel and re-creates it with the same properties"),
    run: async (interaction) => {
        //@ts-ignore
        const member = interaction.guild.members.cache.find(m => m.id === interaction.member.id);
        if (member.permissions.has("ADMINISTRATOR")) {
            //@ts-ignore
            interaction.channel.clone({ position: interaction.channel.rawPosition }).then(c => {
                c.send("https://tenor.com/sTFz.gif");
                interaction.channel.delete().catch((err) => {
                    interaction.reply({
                        embeds: [Constants_1.errorEmbed],
                        ephemeral: true
                    });
                });
            });
        }
        else {
            interaction.reply({
                embeds: [Constants_1.noPermsEmbed],
                ephemeral: true
            });
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9udWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0RBQTBEO0FBQzFELGtEQUE4RDtBQUU5RCxrQkFBZTtJQUNYLElBQUksRUFBRSxJQUFJLDhCQUFtQixFQUFFO1NBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDZixjQUFjLENBQUMsZ0VBQWdFLENBQUM7SUFDckYsR0FBRyxFQUFFLEtBQUssRUFBRSxXQUErQixFQUFFLEVBQUU7UUFDM0MsWUFBWTtRQUNaLE1BQU0sTUFBTSxHQUFnQixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDekMsWUFBWTtZQUNaLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlFLENBQUMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDckMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRTtvQkFDN0QsV0FBVyxDQUFDLEtBQUssQ0FBQzt3QkFDakIsTUFBTSxFQUFFLENBQUUsc0JBQVUsQ0FBRTt3QkFDdEIsU0FBUyxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0ssQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDZCxNQUFNLEVBQUUsQ0FBRSx3QkFBWSxDQUFFO2dCQUN4QixTQUFTLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEludGVyYWN0aW9uIH0gZnJvbSBcImRpc2NvcmQuanMvdHlwaW5ncy9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBTbGFzaENvbW1hbmRCdWlsZGVyIH0gZnJvbSBcIkBkaXNjb3JkanMvYnVpbGRlcnNcIjtcclxuaW1wb3J0IHsgZXJyb3JFbWJlZCwgbm9QZXJtc0VtYmVkIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YTogbmV3IFNsYXNoQ29tbWFuZEJ1aWxkZXIoKVxyXG4gICAgICAgIC5zZXROYW1lKFwibnVrZVwiKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihcIkRlbGV0ZXMgdGhlIGNoYW5uZWwgYW5kIHJlLWNyZWF0ZXMgaXQgd2l0aCB0aGUgc2FtZSBwcm9wZXJ0aWVzXCIpLFxyXG4gICAgcnVuOiBhc3luYyAoaW50ZXJhY3Rpb246IENvbW1hbmRJbnRlcmFjdGlvbikgPT4ge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IG1lbWJlcjogR3VpbGRNZW1iZXIgPSBpbnRlcmFjdGlvbi5ndWlsZC5tZW1iZXJzLmNhY2hlLmZpbmQobSA9PiBtLmlkID09PSBpbnRlcmFjdGlvbi5tZW1iZXIuaWQpO1xyXG4gICAgICAgIGlmIChtZW1iZXIucGVybWlzc2lvbnMuaGFzKFwiQURNSU5JU1RSQVRPUlwiKSkge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb24uY2hhbm5lbC5jbG9uZSh7IHBvc2l0aW9uOiBpbnRlcmFjdGlvbi5jaGFubmVsLnJhd1Bvc2l0aW9uIH0pLnRoZW4oYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjLnNlbmQoXCJodHRwczovL3Rlbm9yLmNvbS9zVEZ6LmdpZlwiKTtcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uLmNoYW5uZWwuZGVsZXRlKCkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdGludGVyYWN0aW9uLnJlcGx5KHtcclxuXHRcdFx0XHRcdFx0ZW1iZWRzOiBbIGVycm9yRW1iZWQgXSxcclxuXHRcdFx0XHRcdFx0ZXBoZW1lcmFsOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW50ZXJhY3Rpb24ucmVwbHkoe1xyXG4gICAgICAgICAgICAgICAgZW1iZWRzOiBbIG5vUGVybXNFbWJlZCBdLFxyXG4gICAgICAgICAgICAgICAgZXBoZW1lcmFsOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
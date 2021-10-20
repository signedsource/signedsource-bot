"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Config_1 = __importDefault(require("../utils/Config"));
class PrivateVoice {
    interaction;
    constructor(interaction) {
        this.interaction = interaction;
    }
    create(member, guild) {
        if (typeof guild.channels.cache.find(c => c.name === member.id &&
            c.type === "GUILD_VOICE" &&
            c.parentId === Config_1.default.channels.privateVoiceCategory)
            === 'undefined') {
            guild.channels.create(member.id, {
                type: "GUILD_VOICE",
                parent: Config_1.default.channels.privateVoiceCategory,
                permissionOverwrites: [
                    {
                        id: member.id,
                        allow: [
                            discord_js_1.Permissions.FLAGS.VIEW_CHANNEL,
                            discord_js_1.Permissions.FLAGS.MANAGE_CHANNELS,
                            discord_js_1.Permissions.FLAGS.CONNECT,
                            discord_js_1.Permissions.FLAGS.SPEAK
                        ]
                    },
                    {
                        id: guild.roles.everyone,
                        deny: [
                            discord_js_1.Permissions.FLAGS.VIEW_CHANNEL,
                            discord_js_1.Permissions.FLAGS.CONNECT,
                            discord_js_1.Permissions.FLAGS.SPEAK
                        ]
                    },
                    {
                        id: Config_1.default.roles.member,
                        deny: [
                            discord_js_1.Permissions.FLAGS.VIEW_CHANNEL,
                            discord_js_1.Permissions.FLAGS.CONNECT,
                            discord_js_1.Permissions.FLAGS.SPEAK
                        ]
                    }
                ]
            }).then(ch => this.interaction.followUp({ content: `Channel created (<#${ch.id}>)`, ephemeral: true }));
        }
        else {
            const hasAlready = new discord_js_1.MessageEmbed()
                .setTitle(":x: | Error")
                .setDescription("You already have a private voice channel!")
                .setColor("RED")
                .setFooter("Don't see the voice channel? Make a support ticket (or try to delete it!)")
                .setTimestamp();
            this.interaction.followUp({ embeds: [hasAlready], ephemeral: true });
        }
    }
    delete(member, guild) {
        const channel = guild.channels.cache.find(c => c.name === member.id &&
            c.type === "GUILD_VOICE" &&
            c.parentId === Config_1.default.channels.privateVoiceCategory);
        if (!(typeof channel === "undefined")) {
            channel.delete().then(() => this.interaction.followUp({ content: 'Your private voice channel has been deleted, you can recreate it with the buttons above.', ephemeral: true }));
        }
        else {
            this.interaction.followUp({ content: 'You don\'t have any voice channels, you can create one with the buttons above.', ephemeral: true });
        }
    }
}
exports.default = PrivateVoice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpdmF0ZVZvaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsYXNzZXMvUHJpdmF0ZVZvaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQTJIO0FBQzNILDZEQUFxQztBQUVyQyxNQUFxQixZQUFZO0lBQzdCLFdBQVcsQ0FBb0I7SUFFL0IsWUFBWSxXQUE4QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQW1CLEVBQUUsS0FBWTtRQUNwQyxJQUFJLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ3JDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFhO1lBQ3hCLENBQUMsQ0FBQyxRQUFRLEtBQUssZ0JBQU0sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BELFdBQVcsRUFBRTtZQUNiLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsb0JBQW9CO2dCQUM1QyxvQkFBb0IsRUFBRTtvQkFDbEI7d0JBQ0ksRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUNiLEtBQUssRUFBRTs0QkFDSCx3QkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZOzRCQUM5Qix3QkFBVyxDQUFDLEtBQUssQ0FBQyxlQUFlOzRCQUNqQyx3QkFBVyxDQUFDLEtBQUssQ0FBQyxPQUFPOzRCQUN6Qix3QkFBVyxDQUFDLEtBQUssQ0FBQyxLQUFLO3lCQUMxQjtxQkFDSjtvQkFDRDt3QkFDSSxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRO3dCQUN4QixJQUFJLEVBQUU7NEJBQ0Ysd0JBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWTs0QkFDOUIsd0JBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTzs0QkFDekIsd0JBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSzt5QkFDMUI7cUJBQ0o7b0JBQ0Q7d0JBQ0ksRUFBRSxFQUFFLGdCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07d0JBQ3ZCLElBQUksRUFBRTs0QkFDRix3QkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZOzRCQUM5Qix3QkFBVyxDQUFDLEtBQUssQ0FBQyxPQUFPOzRCQUN6Qix3QkFBVyxDQUFDLEtBQUssQ0FBQyxLQUFLO3lCQUMxQjtxQkFDSjtpQkFDSjthQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0c7YUFBTTtZQUNILE1BQU0sVUFBVSxHQUFpQixJQUFJLHlCQUFZLEVBQUU7aUJBQzlDLFFBQVEsQ0FBQyxhQUFhLENBQUM7aUJBQ3ZCLGNBQWMsQ0FBQywyQ0FBMkMsQ0FBQztpQkFDM0QsUUFBUSxDQUFDLEtBQUssQ0FBQztpQkFDZixTQUFTLENBQUMsMkVBQTJFLENBQUM7aUJBQ3RGLFlBQVksRUFBRSxDQUFDO1lBRXBCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUUsVUFBVSxDQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQW1CLEVBQUUsS0FBWTtRQUNwQyxNQUFNLE9BQU8sR0FBaUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ3hFLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFhO1lBQ3hCLENBQUMsQ0FBQyxRQUFRLEtBQUssZ0JBQU0sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxXQUFXLENBQUMsRUFBRTtZQUNuQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLDBGQUEwRixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEw7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdGQUFnRixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzdJO0lBQ0wsQ0FBQztDQUNKO0FBcEVELCtCQW9FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkludGVyYWN0aW9uLCBHdWlsZCwgR3VpbGRDaGFubmVsLCBHdWlsZE1lbWJlciwgTWVzc2FnZUVtYmVkLCBQZXJtaXNzaW9ucywgVGhyZWFkQ2hhbm5lbCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL3V0aWxzL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpdmF0ZVZvaWNlIHtcclxuICAgIGludGVyYWN0aW9uOiBCdXR0b25JbnRlcmFjdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbnRlcmFjdGlvbjogQnV0dG9uSW50ZXJhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uID0gaW50ZXJhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKG1lbWJlcjogR3VpbGRNZW1iZXIsIGd1aWxkOiBHdWlsZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ3VpbGQuY2hhbm5lbHMuY2FjaGUuZmluZChjID0+IFxyXG4gICAgICAgICAgICBjLm5hbWUgPT09IG1lbWJlci5pZCAmJiBcclxuICAgICAgICAgICAgYy50eXBlID09PSBcIkdVSUxEX1ZPSUNFXCIgJiYgXHJcbiAgICAgICAgICAgIGMucGFyZW50SWQgPT09IGNvbmZpZy5jaGFubmVscy5wcml2YXRlVm9pY2VDYXRlZ29yeSkgXHJcbiAgICAgICAgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGd1aWxkLmNoYW5uZWxzLmNyZWF0ZShtZW1iZXIuaWQsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR1VJTERfVk9JQ0VcIixcclxuICAgICAgICAgICAgICAgIHBhcmVudDogY29uZmlnLmNoYW5uZWxzLnByaXZhdGVWb2ljZUNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbk92ZXJ3cml0ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9ucy5GTEFHUy5WSUVXX0NIQU5ORUwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9ucy5GTEFHUy5NQU5BR0VfQ0hBTk5FTFMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9ucy5GTEFHUy5DT05ORUNULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnMuRkxBR1MuU1BFQUtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZ3VpbGQucm9sZXMuZXZlcnlvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbnk6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zLkZMQUdTLlZJRVdfQ0hBTk5FTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zLkZMQUdTLkNPTk5FQ1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9ucy5GTEFHUy5TUEVBS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjb25maWcucm9sZXMubWVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW55OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9ucy5GTEFHUy5WSUVXX0NIQU5ORUwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9ucy5GTEFHUy5DT05ORUNULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnMuRkxBR1MuU1BFQUtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSkudGhlbihjaCA9PiB0aGlzLmludGVyYWN0aW9uLmZvbGxvd1VwKHsgY29udGVudDogYENoYW5uZWwgY3JlYXRlZCAoPCMke2NoLmlkfT4pYCwgZXBoZW1lcmFsOiB0cnVlIH0pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNBbHJlYWR5OiBNZXNzYWdlRW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZShcIjp4OiB8IEVycm9yXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJZb3UgYWxyZWFkeSBoYXZlIGEgcHJpdmF0ZSB2b2ljZSBjaGFubmVsIVwiKVxyXG4gICAgICAgICAgICAgICAgLnNldENvbG9yKFwiUkVEXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0Rm9vdGVyKFwiRG9uJ3Qgc2VlIHRoZSB2b2ljZSBjaGFubmVsPyBNYWtlIGEgc3VwcG9ydCB0aWNrZXQgKG9yIHRyeSB0byBkZWxldGUgaXQhKVwiKVxyXG4gICAgICAgICAgICAgICAgLnNldFRpbWVzdGFtcCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvbi5mb2xsb3dVcCh7IGVtYmVkczogWyBoYXNBbHJlYWR5IF0sIGVwaGVtZXJhbDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKG1lbWJlcjogR3VpbGRNZW1iZXIsIGd1aWxkOiBHdWlsZCkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5uZWw6IEd1aWxkQ2hhbm5lbCB8IFRocmVhZENoYW5uZWwgPSBndWlsZC5jaGFubmVscy5jYWNoZS5maW5kKGMgPT5cclxuICAgICAgICAgICAgYy5uYW1lID09PSBtZW1iZXIuaWQgJiYgXHJcbiAgICAgICAgICAgIGMudHlwZSA9PT0gXCJHVUlMRF9WT0lDRVwiICYmIFxyXG4gICAgICAgICAgICBjLnBhcmVudElkID09PSBjb25maWcuY2hhbm5lbHMucHJpdmF0ZVZvaWNlQ2F0ZWdvcnkpO1xyXG5cclxuICAgICAgICBpZiAoISh0eXBlb2YgY2hhbm5lbCA9PT0gXCJ1bmRlZmluZWRcIikpIHtcclxuICAgICAgICAgICAgY2hhbm5lbC5kZWxldGUoKS50aGVuKCgpID0+IHRoaXMuaW50ZXJhY3Rpb24uZm9sbG93VXAoeyBjb250ZW50OiAnWW91ciBwcml2YXRlIHZvaWNlIGNoYW5uZWwgaGFzIGJlZW4gZGVsZXRlZCwgeW91IGNhbiByZWNyZWF0ZSBpdCB3aXRoIHRoZSBidXR0b25zIGFib3ZlLicsIGVwaGVtZXJhbDogdHJ1ZSB9KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvbi5mb2xsb3dVcCh7IGNvbnRlbnQ6ICdZb3UgZG9uXFwndCBoYXZlIGFueSB2b2ljZSBjaGFubmVscywgeW91IGNhbiBjcmVhdGUgb25lIHdpdGggdGhlIGJ1dHRvbnMgYWJvdmUuJywgZXBoZW1lcmFsOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../utils/Config"));
const Logger_1 = __importDefault(require("../utils/Logger"));
exports.default = {
    name: 'presenceUpdate',
    once: false,
    run: async (client, oldPresence, newPresence) => {
        try {
            const guild = client.guilds.cache.find(g => g.id === Config_1.default.guildId);
            const member = guild.members.cache.find(m => m.id === newPresence.userId || m.id === oldPresence.userId);
            const publicistRole = guild.roles.cache.find(r => r.id === Config_1.default.roles.publicist);
            if (newPresence.activities.length === 0) {
                await member.roles.remove(publicistRole);
                return;
            }
            if (newPresence.activities[0].type === "CUSTOM" && newPresence.userId !== Config_1.default.clientId) {
                if (newPresence.activities[0].state.includes(Config_1.default.inviteURL)) {
                    if (member.roles.cache.find(r => r === publicistRole)) {
                        return;
                    }
                    else {
                        await member.roles.add(publicistRole);
                    }
                }
                else if (!newPresence.activities[0].state.includes(Config_1.default.inviteURL)) {
                    if (member.roles.cache.find(r => r === publicistRole)) {
                        await member.roles.remove(publicistRole);
                    }
                    else {
                        return;
                    }
                }
            }
        }
        catch (err) {
            Logger_1.default.error(Config_1.default.messages.skipCrashOnPresenceUpdate);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2VVcGRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL3ByZXNlbmNlVXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkRBQXFDO0FBQ3JDLDZEQUFxQztBQUVyQyxrQkFBZTtJQUNYLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLEtBQUs7SUFDZCxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQWMsRUFBRSxXQUFxQixFQUFFLFdBQXFCLEVBQUUsRUFBRTtRQUNyRSxJQUFJO1lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6RyxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLGdCQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTVGLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPO2FBQ1Y7WUFFRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLGdCQUFNLENBQUMsUUFBUSxFQUFFO2dCQUN2RixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUM1RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsRUFBRTt3QkFDckUsT0FBTztxQkFDUDt5QkFBTTt3QkFDTixNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUN0QztpQkFDVztxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ3BFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxFQUFFO3dCQUNyRSxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUN6Qzt5QkFBTTt3QkFDTixPQUFPO3FCQUNQO2lCQUNXO2FBQ0o7U0FDSjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50LCBQcmVzZW5jZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL3V0aWxzL0NvbmZpZ1wiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi91dGlscy9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdwcmVzZW5jZVVwZGF0ZScsXHJcbiAgICBvbmNlOiBmYWxzZSxcclxuXHRydW46IGFzeW5jIChjbGllbnQ6IENsaWVudCwgb2xkUHJlc2VuY2U6IFByZXNlbmNlLCBuZXdQcmVzZW5jZTogUHJlc2VuY2UpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBndWlsZCA9IGNsaWVudC5ndWlsZHMuY2FjaGUuZmluZChnID0+IGcuaWQgPT09IGNvbmZpZy5ndWlsZElkKTtcclxuICAgICAgICAgICAgY29uc3QgbWVtYmVyID0gZ3VpbGQubWVtYmVycy5jYWNoZS5maW5kKG0gPT4gbS5pZCA9PT0gbmV3UHJlc2VuY2UudXNlcklkIHx8IG0uaWQgPT09IG9sZFByZXNlbmNlLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB1YmxpY2lzdFJvbGUgPSBndWlsZC5yb2xlcy5jYWNoZS5maW5kKHIgPT4gci5pZCA9PT0gY29uZmlnLnJvbGVzLnB1YmxpY2lzdCk7XHJcblxyXG5cdFx0XHRpZiAobmV3UHJlc2VuY2UuYWN0aXZpdGllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IG1lbWJlci5yb2xlcy5yZW1vdmUocHVibGljaXN0Um9sZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdQcmVzZW5jZS5hY3Rpdml0aWVzWzBdLnR5cGUgPT09IFwiQ1VTVE9NXCIgJiYgbmV3UHJlc2VuY2UudXNlcklkICE9PSBjb25maWcuY2xpZW50SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdQcmVzZW5jZS5hY3Rpdml0aWVzWzBdLnN0YXRlLmluY2x1ZGVzKGNvbmZpZy5pbnZpdGVVUkwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlci5yb2xlcy5jYWNoZS5maW5kKHIgPT4gciA9PT0gcHVibGljaXN0Um9sZSkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YXdhaXQgbWVtYmVyLnJvbGVzLmFkZChwdWJsaWNpc3RSb2xlKTtcclxuXHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW5ld1ByZXNlbmNlLmFjdGl2aXRpZXNbMF0uc3RhdGUuaW5jbHVkZXMoY29uZmlnLmludml0ZVVSTCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyLnJvbGVzLmNhY2hlLmZpbmQociA9PiByID09PSBwdWJsaWNpc3RSb2xlKSkge1xyXG5cdFx0XHRcdFx0XHRhd2FpdCBtZW1iZXIucm9sZXMucmVtb3ZlKHB1YmxpY2lzdFJvbGUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihjb25maWcubWVzc2FnZXMuc2tpcENyYXNoT25QcmVzZW5jZVVwZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
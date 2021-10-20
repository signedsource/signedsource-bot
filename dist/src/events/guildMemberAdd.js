"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const node_util_1 = __importDefault(require("node:util"));
const Config_1 = __importDefault(require("../utils/Config"));
exports.default = {
    name: 'guildMemberAdd',
    once: false,
    run: async (client, member) => {
        const wch = member.guild.channels.cache.find(c => c.id === Config_1.default.channels.welcome);
        const wembed = new discord_js_1.MessageEmbed()
            .setTitle(Config_1.default.messages.welcomeTitle)
            .setDescription(node_util_1.default.format(Config_1.default.messages.welcome, `${member}`))
            .setThumbnail(Config_1.default.logos.default)
            .setTimestamp()
            .setColor("BLUE");
        //@ts-ignore
        wch.send({ content: `${member}`, embeds: [wembed] });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRNZW1iZXJBZGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL2d1aWxkTWVtYmVyQWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQStEO0FBQy9ELDBEQUE2QjtBQUM3Qiw2REFBcUM7QUFFckMsa0JBQWU7SUFDWCxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3pCLElBQUksRUFBRSxLQUFLO0lBQ1gsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFjLEVBQUUsTUFBbUIsRUFBRSxFQUFFO1FBQ2xELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLGdCQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sTUFBTSxHQUFHLElBQUkseUJBQVksRUFBRTthQUMvQixRQUFRLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQ3RDLGNBQWMsQ0FBQyxtQkFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ2pFLFlBQVksQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDbEMsWUFBWSxFQUFFO2FBQ2QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5CLFlBQVk7UUFDWixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUUsTUFBTSxDQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50LCBHdWlsZE1lbWJlciwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHV0aWwgZnJvbSBcIm5vZGU6dXRpbFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi91dGlscy9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdndWlsZE1lbWJlckFkZCcsXHJcblx0b25jZTogZmFsc2UsXHJcblx0cnVuOiBhc3luYyAoY2xpZW50OiBDbGllbnQsIG1lbWJlcjogR3VpbGRNZW1iZXIpID0+IHtcdFxyXG5cdFx0Y29uc3Qgd2NoID0gbWVtYmVyLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmZpbmQoYyA9PiBjLmlkID09PSBjb25maWcuY2hhbm5lbHMud2VsY29tZSk7XHJcblx0XHRjb25zdCB3ZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuXHRcdFx0LnNldFRpdGxlKGNvbmZpZy5tZXNzYWdlcy53ZWxjb21lVGl0bGUpXHJcblx0XHRcdC5zZXREZXNjcmlwdGlvbih1dGlsLmZvcm1hdChjb25maWcubWVzc2FnZXMud2VsY29tZSwgYCR7bWVtYmVyfWApKVxyXG5cdFx0XHQuc2V0VGh1bWJuYWlsKGNvbmZpZy5sb2dvcy5kZWZhdWx0KVxyXG5cdFx0XHQuc2V0VGltZXN0YW1wKClcclxuXHRcdFx0LnNldENvbG9yKFwiQkxVRVwiKTtcclxuXHRcdFx0XHJcblx0XHQvL0B0cy1pZ25vcmVcclxuXHRcdHdjaC5zZW5kKHsgY29udGVudDogYCR7bWVtYmVyfWAsIGVtYmVkczogWyB3ZW1iZWQgXX0pO1xyXG5cdH1cclxufSJdfQ==
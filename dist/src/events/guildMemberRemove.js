"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const node_util_1 = __importDefault(require("node:util"));
const Config_1 = __importDefault(require("../utils/Config"));
exports.default = {
    name: 'guildMemberRemove',
    once: false,
    run: async (client, member) => {
        const wch = member.guild.channels.cache.find(c => c.id === Config_1.default.channels.welcome);
        const bembed = new discord_js_1.MessageEmbed()
            .setTitle(Config_1.default.messages.goodbyeTitle)
            .setDescription(node_util_1.default.format(Config_1.default.messages.goodbye, `${member}`))
            .setThumbnail(Config_1.default.logos.default)
            .setTimestamp()
            .setColor("RED");
        //@ts-ignore
        wch.send({ content: `${member}`, embeds: [bembed] });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRNZW1iZXJSZW1vdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL2d1aWxkTWVtYmVyUmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQStEO0FBQy9ELDBEQUE2QjtBQUM3Qiw2REFBcUM7QUFFckMsa0JBQWU7SUFDWCxJQUFJLEVBQUUsbUJBQW1CO0lBQ3pCLElBQUksRUFBRSxLQUFLO0lBQ1gsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFjLEVBQUUsTUFBbUIsRUFBRSxFQUFFO1FBQy9DLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLGdCQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBGLE1BQU0sTUFBTSxHQUFHLElBQUkseUJBQVksRUFBRTthQUM1QixRQUFRLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQ3RDLGNBQWMsQ0FBQyxtQkFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ2pFLFlBQVksQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDbEMsWUFBWSxFQUFFO2FBQ2QsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLFlBQVk7UUFDWixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50LCBHdWlsZE1lbWJlciwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHV0aWwgZnJvbSBcIm5vZGU6dXRpbFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi91dGlscy9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdndWlsZE1lbWJlclJlbW92ZScsXHJcbiAgICBvbmNlOiBmYWxzZSxcclxuICAgIHJ1bjogYXN5bmMgKGNsaWVudDogQ2xpZW50LCBtZW1iZXI6IEd1aWxkTWVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2NoID0gbWVtYmVyLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmZpbmQoYyA9PiBjLmlkID09PSBjb25maWcuY2hhbm5lbHMud2VsY29tZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0VGl0bGUoY29uZmlnLm1lc3NhZ2VzLmdvb2RieWVUaXRsZSlcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKHV0aWwuZm9ybWF0KGNvbmZpZy5tZXNzYWdlcy5nb29kYnllLCBgJHttZW1iZXJ9YCkpXHJcbiAgICAgICAgICAgIC5zZXRUaHVtYm5haWwoY29uZmlnLmxvZ29zLmRlZmF1bHQpXHJcbiAgICAgICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJSRURcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgd2NoLnNlbmQoeyBjb250ZW50OiBgJHttZW1iZXJ9YCwgZW1iZWRzOiBbYmVtYmVkXSB9KTtcclxuICAgIH1cclxufSJdfQ==
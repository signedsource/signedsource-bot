"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.token = void 0;
const discord_js_1 = require("discord.js");
exports.token = process.env.TOKEN;
exports.options = {
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_PRESENCES, discord_js_1.Intents.FLAGS.GUILD_MEMBERS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILD_INTEGRATIONS],
    partials: ["MESSAGE", "CHANNEL", "USER", "GUILD_MEMBER"]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL0NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBb0Q7QUFFdkMsUUFBQSxLQUFLLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDbEMsUUFBQSxPQUFPLEdBQWtCO0lBQ2xDLE9BQU8sRUFBRSxDQUFFLG9CQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLG9CQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBRTtJQUM3SixRQUFRLEVBQUUsQ0FBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUU7Q0FDN0QsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudE9wdGlvbnMsIEludGVudHMgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRva2VuOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5UT0tFTjtcclxuZXhwb3J0IGNvbnN0IG9wdGlvbnM6IENsaWVudE9wdGlvbnMgPSB7XHJcbiAgICBpbnRlbnRzOiBbIEludGVudHMuRkxBR1MuR1VJTERTLCBJbnRlbnRzLkZMQUdTLkdVSUxEX1BSRVNFTkNFUywgSW50ZW50cy5GTEFHUy5HVUlMRF9NRU1CRVJTLCBJbnRlbnRzLkZMQUdTLkdVSUxEX01FU1NBR0VTLCBJbnRlbnRzLkZMQUdTLkdVSUxEX0lOVEVHUkFUSU9OUyBdLFxyXG4gICAgcGFydGlhbHM6IFsgXCJNRVNTQUdFXCIsIFwiQ0hBTk5FTFwiLCBcIlVTRVJcIiwgXCJHVUlMRF9NRU1CRVJcIiBdXHJcbn0iXX0=
import { Client, Presence } from "discord.js";
import config from "../utils/Config.js";
import logger from "../utils/Logger.js";

export default {
    name: 'presenceUpdate',
    once: false,
	run: async (client: Client, oldPresence: Presence, newPresence: Presence) => {
        try {
            const guild = client.guilds.cache.find(g => g.id === config.guildId);
            const member = guild.members.cache.find(m => m.id === newPresence.userId || m.id === oldPresence.userId);
            const publicistRole = guild.roles.cache.find(r => r.id === config.roles.publicist);

			if (newPresence.activities.length === 0) {
                await member.roles.remove(publicistRole);
                return;
            }

            if (newPresence.activities[0].type === "CUSTOM" && newPresence.userId !== config.clientId) {
                if (newPresence.activities[0].state.includes(config.inviteURL)) {
                    if (member.roles.cache.find(r => r === publicistRole)) {
						return;
					} else {
						await member.roles.add(publicistRole);
					}
                } else if (!newPresence.activities[0].state.includes(config.inviteURL)) {
                    if (member.roles.cache.find(r => r === publicistRole)) {
						await member.roles.remove(publicistRole);
					} else {
						return;
					}
                }
            }
        } catch (err) {
            logger.error(config.messages.skipCrashOnPresenceUpdate);
        }
    }
}
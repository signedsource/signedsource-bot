const chalk = require('chalk');
const { roles, guildId, clientId, messages, inviteURL } = require("../data/config.json");

module.exports = {
    name: 'presenceUpdate',
    once: false,
	run: async (client, oldPresence, newPresence) => {
        try {
            const guild = client.guilds.cache.find(g => g.id === guildId);
            const member = guild.members.cache.find(m => m.id === newPresence.userId || m.id === oldPresence.userId);
            const publicistRole = guild.roles.cache.find(r => r.id === roles.publicist);

			if (newPresence.activities.length === 0) {
                await member.roles.remove(publicistRole);
                return;
            }

            if (newPresence.activities[0].type === "CUSTOM" && newPresence.userId !== clientId) {
                if (newPresence.activities[0].state.includes(inviteURL)) {
                    if (member.roles.cache.find(r => r === publicistRole)) {
						return;
					} else {
						await member.roles.add(publicistRole);
					}
                } else if (!newPresence.activities[0].state.includes(inviteURL)) {
                    if (member.roles.cache.find(r => r === publicistRole)) {
						await member.roles.remove(publicistRole);
					} else {
						return;
					}
                }
            }
        } catch (err) {
            console.log(`${chalk.red("[ERROR]")} ${chalk.white(messages.skipCrashOnPresenceUpdate)}`);
        }
	}
}
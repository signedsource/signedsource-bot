const { roles } = require("../data/config.json");

module.exports = {
	name: 'guildMemberUpdate',
	once: false,
	run: async (client, oldMember, newMember) => {
		const db = client.db;
		const verifiedMembers = db.get("verifiedMembers");

		if (oldMember.roles.cache == newMember.roles.cache) {
			return;
		} else {
			if (newMember.roles.cache.find(r => r.id === roles.member)) {
				if (oldMember.roles.cache.find(r => r.id === roles.member)) return;
				verifiedMembers.push(newMember.user.id);
				db.set("verifiedMembers", verifiedMembers);
				db.sync();
			} else {
				if (!oldMember.roles.cache.find(r => r.id === roles.member)) return;
				const index = verifiedMembers.indexOf(newMember.user.id);
				if (index > -1) {
					verifiedMembers.splice(index, 1);
					db.set("verifiedMembers", verifiedMembers);
					db.sync();
				}
			}
		}
	}
}
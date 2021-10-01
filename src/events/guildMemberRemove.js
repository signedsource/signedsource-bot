const { MessageEmbed } = require("discord.js");
const { messages, channels, logos } = require("../data/config.json");
const printf = require("../utils/strings/printf");

module.exports = {
	name: 'guildMemberRemove',
	once: false,
	run: async (client, member) => {
		const wch = member.guild.channels.cache.find(c => c.id === channels.welcome);
		const db = client.db;
		let guildMembers = db.get("guildMembers");
		let verifiedMembers = db.get("verifiedMembers");

		const vindex = verifiedMembers.indexOf(member.user.id);
		const gindex = guildMembers.indexOf(member.user.id);

		if (verifiedMembers.indexOf(member.user.id) > -1) {
			verifiedMembers = verifiedMembers.splice(vindex, 1);
			db.set("verifiedMembers", verifiedMembers);
			db.sync();
		}

		if (guildMembers.indexOf(member.user.id) > -1) {
			guildMembers = guildMembers.splice(gindex, 1);
			db.set("guildMembers", guildMembers);
			db.sync();
		}

		const bembed = new MessageEmbed()
			.setTitle(messages.goodbyeTitle)
			.setDescription(await printf(messages.goodbye, "%d", [ `${member}`]))
			.setThumbnail(logos.default)
			.setTimestamp()
			.setColor("RED");
		wch.send({ content: `${member}`, embeds: [ bembed ]});
	}
}
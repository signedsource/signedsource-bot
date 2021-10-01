const { MessageEmbed } = require("discord.js");
const { messages, channels, logos } = require("../data/config.json");
const printf = require("../utils/strings/printf");

module.exports = {
	name: 'guildMemberAdd',
	once: false,
	run: async (client, member) => {
		const db = client.db;
		const guildMembers = db.get("guildMembers");
		
		if (!member.user.bot) {
			guildMembers.push(member.user.id);
			db.sync();
		}
			
		const wch = member.guild.channels.cache.find(c => c.id === channels.welcome);
		const wembed = new MessageEmbed()
			.setTitle(messages.welcomeTitle)
			.setDescription(await printf(messages.welcome, "%d", [ `${member}`]))
			.setThumbnail(logos.default)
			.setTimestamp()
			.setColor("BLUE");
		wch.send({ content: `${member}`, embeds: [ wembed ]});
	}
}
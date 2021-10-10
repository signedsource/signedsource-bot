import { MessageEmbed } from "discord.js";
import config from "../utils/Config.js";

export default {
    name: 'guildMemberAdd',
	once: false,
	run: async (client, member) => {
		const db = client.db;
		const guildMembers = db.get("guildMembers");
		
		if (!member.user.bot) {
			guildMembers.push(member.user.id);
			db.sync();
		}
			
		const wch = member.guild.channels.cache.find(c => c.id === config.channels.welcome);
		const wembed = new MessageEmbed()
			.setTitle(config.messages.welcomeTitle)
			.setDescription(await printf(config.messages.welcome, "%d", [ `${member}`]))
			.setThumbnail(logos.default)
			.setTimestamp()
			.setColor("BLUE");
		wch.send({ content: `${member}`, embeds: [ wembed ]});
	}
}
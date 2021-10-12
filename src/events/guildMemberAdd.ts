import { Client, GuildMember, MessageEmbed } from "discord.js";
import util from "node:util";
import config from "../utils/Config";

export default {
    name: 'guildMemberAdd',
	once: false,
	run: async (client: Client, member: GuildMember) => {	
		const wch = member.guild.channels.cache.find(c => c.id === config.channels.welcome);
		const wembed = new MessageEmbed()
			.setTitle(config.messages.welcomeTitle)
			.setDescription(util.format(config.messages.welcome, `${member}`))
			.setThumbnail(config.logos.default)
			.setTimestamp()
			.setColor("BLUE");
			
		//@ts-ignore
		wch.send({ content: `${member}`, embeds: [ wembed ]});
	}
}
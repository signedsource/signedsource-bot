import { Client, GuildMember, MessageEmbed } from "discord.js";
import util from "node:util";
import config from "../utils/Config.js";

export default {
    name: 'guildMemberRemove',
    once: false,
    run: async (client: Client, member: GuildMember) => {
        const wch = member.guild.channels.cache.find(c => c.id === config.channels.welcome);

        const bembed = new MessageEmbed()
            .setTitle(config.messages.goodbyeTitle)
            .setDescription(util.format(config.messages.goodbye, `${member}`))
            .setThumbnail(config.logos.default)
            .setTimestamp()
            .setColor("RED");
        
        //@ts-ignore
        wch.send({ content: `${member}`, embeds: [bembed] });
    }
}
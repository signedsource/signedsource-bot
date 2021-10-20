import { Client, GuildChannel } from "discord.js";

export default {
    name: 'channelUpdate',
	once: false,
	run: async (client: Client, oldChannel: GuildChannel, newChannel: GuildChannel) => {
        oldChannel.name = oldChannel.name.replace(/\D/g, '');
        newChannel.name = newChannel.name.replace(/\D/g, '');

        if (!oldChannel.deleted && !newChannel.deleted) {
            const ifPrivateChannel = newChannel.guild.members.cache.find(member => member.id === newChannel.name);
            if (typeof ifPrivateChannel !== 'undefined') {
                newChannel.setName(oldChannel.name);
            }
        }
	}
}
import { Client, Message, MessageEmbed } from "discord.js";

export default {
    name: 'messageCreate',
	once: false,
	run: async (client: Client, message: Message) => {
		if (message.content.toLowerCase() === "!d bump") {      
            message.reply({ embeds: [
                new MessageEmbed()
                    .setTitle(":x: | Error")
                    .setDescription("This ability is disabled, come back later!")
                    .setColor("RED")
                    .setTimestamp()
            ]});
        }
    }
}
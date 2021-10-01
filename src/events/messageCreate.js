const { MessageEmbed } = require("discord.js");
const { messages } = require("../data/config.json");

module.exports = {
	name: 'messageCreate',
	once: false,
	run: async (client, message) => {
        const db = client.db;
        let bump = db.get("bumpTime");

		if (message.content.toLowerCase() === "!d bump" && bump === 0) {
            try {
                const reminderOfBumpNotify = new MessageEmbed()
                .setTitle("Done!")
                .setDescription(messages.reminderOfBumpNotify)
                .setColor("GREEN")
                .setTimestamp();

                const reminderOfBump = new MessageEmbed()
                    .setTitle("Hey!")
                    .setDescription(messages.canBumpAgain)
                    .setColor("RANDOM")
                    .setTimestamp();

                await message.channel.send({ embeds: [ reminderOfBumpNotify ]});
                bump = (Date.now() + 7200000);
                await db.set("bumpTime", bump);
                await db.sync();

                setTimeout(async () => {
                    bump = 0;
                    await db.set("bumpTime", bump);
                    await db.sync();
                    await message.channel.send({ content: `${message.author}`, embeds: [ reminderOfBump ] });
                }, 7200000);
            } catch (err) {
                return;
            }
        } else if (message.content.toLowerCase() === "!d bump") {
            const cantBump = new MessageEmbed()
                .setTitle(":x: | Error")
                .setDescription(messages.cantBump)
                .setColor("RED")
                .setTimestamp();

            await message.channel.send({ content: `${message.author}`, embeds: [ cantBump ] });
        }
	}
}
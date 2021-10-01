const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { messages, roles, logos } = require("../data/config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
        .setDescription('Shows up some stats that the bot has recived')
		.addSubcommand(subcommand => subcommand
			.setName('user')
			.setDescription('Stats about a user')
			.addUserOption(option => option.setName('target').setDescription('User to give stats about').setRequired(true)))
		.addSubcommand(subcommand => subcommand
			.setName('global')
			.setDescription('Gives global stats about everything that has been cached')),
	run: async interaction => {
		const db = interaction.client.db;
		const usedCmds = db.get("usedCommands");
		const usedCmdsBy = db.get("commandsUsedBy");
		const usedBtnsBy = db.get("usedButtonsBy");
		const verifiedMembers = db.get("verifiedMembers");
		const guildMembers = db.get("guildMembers");

		switch (interaction.options.getSubcommand()) {
			case "user":
				const member = interaction.options.getUser('target');
				const guildMember = interaction.guild.members.cache.find(m => m.id === member.id);

				var memberUsedCmds = [];
				await Promise.all([
					await Object.keys(usedCmdsBy).forEach(async item => {
						await Object.keys(usedCmdsBy[item]).forEach(async key => {
							var cname;
							await Promise.resolve(interaction.guild.commands.fetch(item)).then(val => cname = val.name);
							memberUsedCmds.push([key, cname, usedCmdsBy[item][key]])
						});
					})
				]);

				var userSlashes = [];
				await Promise.all([
					memberUsedCmds.forEach(cmd => {
						if (cmd[0] == member.id) {
							userSlashes.push(cmd);
						}
					})
				]);

				var slashNames = [];
				await Promise.all([
					userSlashes.forEach(cmd => slashNames.push(`<:SlashCommandEmoji:891368661581963315> /${cmd[1]}: ${cmd[2]}`))
				]);

				const userStats = new MessageEmbed()
					.setTitle(`Stats of ${member.username}`)
					.addField("Used Slash Commands", slashNames.length == 0 ? messages.noExecutedCommands : slashNames.join("\n"), true)
					.addField("Verification :white_check_mark:", guildMember.roles.cache.find(r => r.id === roles.member) ? messages.isVerified : messages.isntVerified, true)
					.setColor("RANDOM")
					.setThumbnail(logos.default)
					.setTimestamp();

				interaction.reply({ embeds: [userStats] });
				break;
			case "global":
				var globalCmds = [];
				await Promise.all([
					Object.keys(usedCmds).forEach(async item => {
						await Promise.resolve(interaction.guild.commands.fetch(item)).then(val => {
							globalCmds.push([item, val.name, usedCmds[item]]);
						});
					})
				]);

				var globalSlashNames = [];
				await Promise.all([
					globalCmds.forEach(cmd => globalSlashNames.push(`<:SlashCommandEmoji:891368661581963315> /${cmd[1]}: ${cmd[2]}`))
				]);

				const serverStats = new MessageEmbed()
					.setTitle("Server Stats")
					.addField("Verified people", `${Math.trunc((verifiedMembers.length / guildMembers.length) * 100)}% (${verifiedMembers.length}/${guildMembers.length})`, true)
					.addField("Global Slash Command Stats", globalSlashNames.join("\n"), true)
					.setColor("RANDOM")
					.setThumbnail(logos.default)
					.setTimestamp();

				interaction.reply({ embeds: [serverStats] });
				break;
		}
	}
}
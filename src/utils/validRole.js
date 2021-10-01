const validRole = async (interaction, rid) => {
	const rl = await interaction.guild.roles.cache.find(r => r.id === rid);
	if (interaction.member.roles.cache.find(r => r === rl)) {
		return true;
	} else {
		return false;
	}
}

module.exports = validRole;
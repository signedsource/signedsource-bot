const validPermissions = async (interaction, permissions) => {
    const m = interaction.guild.members.cache.find(m => m.id === interaction.member.id);
    if (m.permissions.has(permissions)) {
        return true;
    } else {
        return false;
    }
}

module.exports = validPermissions;
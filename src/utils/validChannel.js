const validChannel = async (interaction, cid) => {
  if (interaction.channel.id === cid) {
    return true;
  } else {
    return false;
  }
}

module.exports = validChannel;
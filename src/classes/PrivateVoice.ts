import { ButtonInteraction, Guild, GuildChannel, GuildMember, MessageEmbed, Permissions, ThreadChannel } from "discord.js";
import config from "../utils/Config";

export default class PrivateVoice {
    interaction: ButtonInteraction;

    constructor(interaction: ButtonInteraction) {
        this.interaction = interaction;
    }

    create(member: GuildMember, guild: Guild) {
        if (typeof guild.channels.cache.find(c => 
            c.name === member.id && 
            c.type === "GUILD_VOICE" && 
            c.parentId === config.channels.privateVoiceCategory) 
        === 'undefined') {
            guild.channels.create(member.id, {
                type: "GUILD_VOICE",
                parent: config.channels.privateVoiceCategory,
                permissionOverwrites: [
                    {
                        id: member.id,
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.MANAGE_CHANNELS,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.SPEAK
                        ]
                    },
                    {
                        id: guild.roles.everyone,
                        deny: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.SPEAK
                        ]
                    },
                    {
                        id: config.roles.member,
                        deny: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.SPEAK
                        ]
                    }
                ]
            }).then(ch => this.interaction.followUp({ content: `Channel created (<#${ch.id}>)`, ephemeral: true }));
        } else {
            const hasAlready: MessageEmbed = new MessageEmbed()
                .setTitle(":x: | Error")
                .setDescription("You already have a private voice channel!")
                .setColor("RED")
                .setFooter("Don't see the voice channel? Make a support ticket (or try to delete it!)")
                .setTimestamp();

            this.interaction.followUp({ embeds: [ hasAlready ], ephemeral: true });
        }
    }

    delete(member: GuildMember, guild: Guild) {
        const channel: GuildChannel | ThreadChannel = guild.channels.cache.find(c =>
            c.name === member.id && 
            c.type === "GUILD_VOICE" && 
            c.parentId === config.channels.privateVoiceCategory);

        if (!(typeof channel === "undefined")) {
            channel.delete().then(() => this.interaction.followUp({ content: 'Your private voice channel has been deleted, you can recreate it with the buttons above.', ephemeral: true }));
        } else {
            this.interaction.followUp({ content: 'You don\'t have any voice channels, you can create one with the buttons above.', ephemeral: true });
        }
    }
}
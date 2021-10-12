import { CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, TextChannel, Permissions, GuildChannel } from "discord.js";
import config from "../utils/Config";

export default class Ticket {
    interaction: CommandInteraction;

    constructor(interaction: CommandInteraction) {
        this.interaction = interaction;
    }

    create(ticket: string) {
        var desc: string, embeds: Array<MessageEmbed>;

        if (ticket == "apply") desc = config.messages.applyTicketMessage;
        if (ticket == "support") desc = config.messages.supportTicketMessage;

        this.interaction.guild.channels.create(`${ticket}-ticket-${this.interaction.member.user.username}`, {
            //@ts-ignore
            parent: this.interaction.client.channels.cache.find(c => c.id === config.channels.ticketsCategory && c.type === "GUILD_CATEGORY"),
            permissionOverwrites: [
                {
                    id: this.interaction.member.user.id,
                    allow: [
                        Permissions.FLAGS.VIEW_CHANNEL,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY
                    ],
                },
                {
                    id: this.interaction.guild.roles.everyone,
                    deny: [
                        Permissions.FLAGS.VIEW_CHANNEL,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY
                    ]
                },
                {
                    id: config.roles.member,
                    deny: [
                        Permissions.FLAGS.VIEW_CHANNEL,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY
                    ]
                },
                {
                    id: config.roles.staff,
                    allow: [
                        Permissions.FLAGS.VIEW_CHANNEL,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY
                    ]
                },
                {
                    id: config.roles.signedteam,
                    allow: [
                        Permissions.FLAGS.VIEW_CHANNEL,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY
                    ]
                }
            ]
        }).then(async (c: TextChannel) => {
            const closeTicketRow = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('closeTicketBtn')
                        .setLabel('Close Ticket')
                        .setEmoji('❌')
                        .setStyle('DANGER')
                );
    
            const ticketsEmbed = new MessageEmbed()
                .setColor('#EE0000')
                .setTitle(`Ticket of ${this.interaction.member.user.username}`)
                .setDescription(desc);
    
            const qasEmbed = new MessageEmbed()
                .setColor('#EE0000')
                .setDescription(config.messages.questionsApply.join("\n"))
                .setTimestamp();
    
            if (ticket == "apply") {
                embeds = [ticketsEmbed, qasEmbed];
            } else {
                embeds = [ticketsEmbed];
            }
    
            await c.send({
                content: `<@${this.interaction.member.user.id}> | <@&${config.roles.signedteam}> | <@&${config.roles.staff}>`,
                embeds,
                components: [closeTicketRow]
            }).then(m => m.pin());
        }).catch(e => console.log(e));
    }

    delete(channel: GuildChannel) {

    }
}
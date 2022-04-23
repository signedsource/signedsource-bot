import { codeBlock } from "@discordjs/builders";
import { randomInt } from "crypto";
import { CommandInteraction, MessageEmbed } from "discord.js";
import config from "../utils/Config";
import { buttonComponentsArray } from "../utils/Constants";

export default class Verification {
    interaction: CommandInteraction;

    constructor(interaction: CommandInteraction) {
        this.interaction = interaction;
    }

    start() {
        let code = randomInt(100000, 999999);
        eval(`global.member_${this.interaction.member.user.id} = { verificationCode: ${code}, enteredNumbers: 'Nothing!' }`);

        this.interaction.editReply({
            embeds: [
                new MessageEmbed()
                    .setTitle(config.messages.verificationCodeEmbedTitle)
                    // @ts-ignore
                    .addField("Code", codeBlock("python", eval(`global.member_${this.interaction.member.user.id}.verificationCode`)), true)
                    .addField("Entered code", codeBlock("python", "Nothing!"), true)
                    .setColor("RANDOM")
                    .setTimestamp()
            ],
            components: buttonComponentsArray
        });
    }

    update(enteredCode: string) {
        let enteredCodeValue = eval(`global.member_${this.interaction.member.user.id}.enteredNumbers`);
        if (enteredCodeValue == "Nothing!" || enteredCodeValue == "Invalid Code!") {
            enteredCodeValue = "";
            eval(`global.member_${this.interaction.member.user.id}.enteredNumbers = "${enteredCode}"`);
        } else if (enteredCodeValue) {
            eval(`global.member_${this.interaction.member.user.id}.enteredNumbers += "${enteredCode}"`);
        }
        
        this.interaction.editReply({
            embeds: [
                new MessageEmbed()
                    .setTitle(config.messages.verificationCodeEmbedTitle)
                    .addField("Code", codeBlock("python", eval(`global.member_${this.interaction.member.user.id}.verificationCode`)), true)
                    .addField("Entered Code", codeBlock("python", eval(`global.member_${this.interaction.member.user.id}.enteredNumbers`)), true)
                    .setColor("RANDOM")
                    .setTimestamp()
            ],
            components: buttonComponentsArray
        });
    }

    reset() {
        eval(`global.member_${this.interaction.member.user.id}.enteredNumbers = "Nothing!"`);
        this.interaction.editReply({
            embeds: [
                new MessageEmbed()
                    .setTitle(config.messages.verificationCodeEmbedTitle)
                    // @ts-ignore
                    .addField("Code", codeBlock("python", eval(`global.member_${this.interaction.member.user.id}.verificationCode`)), true)
                    .addField("Entered code", codeBlock("python", "Nothing!"), true)
                    .setColor("RANDOM")
                    .setTimestamp()
            ],
            components: buttonComponentsArray
        });
    }

    verify() {
        let enteredCode = eval(`global.member_${this.interaction.member.user.id}.enteredNumbers`);
        let verificationCode = eval(`global.member_${this.interaction.member.user.id}.verificationCode`);
        let code = randomInt(100000, 999999);

        if (enteredCode == verificationCode) {
            eval(`global.member_${this.interaction.member.user.id} = null`);
            // @ts-ignore
            this.interaction.member.roles.add(this.interaction.guild.roles.cache.find(r => r.id === config.roles.member));

            this.interaction.editReply({
                content: "Verified!",
                embeds: [],
                components: []
            });
        } else {
            eval(`global.member_${this.interaction.member.user.id} = { verificationCode: ${code}, enteredNumbers: 'Invalid Code!' }`);

            this.interaction.editReply({
                embeds: [
                    new MessageEmbed()
                    .setTitle(config.messages.verificationCodeEmbedTitle)
                    // @ts-ignore
                    .addField("Code", codeBlock("python", eval(`global.member_${this.interaction.member.user.id}.verificationCode`)), true)
                    .addField("Entered code", codeBlock("python", "Invalid Code!"), true)
                    .setColor("RANDOM")
                    .setTimestamp()
                ],
                components: buttonComponentsArray
            });
        }
    }
}
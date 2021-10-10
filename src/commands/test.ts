import { SlashCommandBuilder } from "@discordjs/builders";

export default {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Test"),
    run: async (interaction: any) => {
        await interaction.reply({ content: "Hello World from TypeScript" });
    }
}
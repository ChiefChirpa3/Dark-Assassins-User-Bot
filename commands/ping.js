const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Replies with Pong! (TEST)'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
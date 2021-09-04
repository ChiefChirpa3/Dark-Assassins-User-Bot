const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a member specified')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('member that needs to get banned')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
            .setDescription('reason of ban')),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        await user.ban(reason);
    },
};
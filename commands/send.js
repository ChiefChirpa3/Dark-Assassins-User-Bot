const Discord = ('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('send')
        .setDescription('Sends a message to a specific channel')
        .addChannelOption(option =>
            option.setName('channel')
            .setDescription('Channel where message is sent')
            .setRequired(true))
        .addStringOption(option => 
            option.setName('msg')
            .setDescription('Message that will be sent')
            .setRequired(true)),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const message = interaction.options.getString('msg');
        await channel.send(message);
        await interaction.reply({content: `Message [ \'${message}\' ] was sent in: ${channel}`, ephemeral: true});


        const exampleEmbed = new MessageEmbed()
            .setTitle('Dark Assassins - Frequently Asked Questions')
    },
};
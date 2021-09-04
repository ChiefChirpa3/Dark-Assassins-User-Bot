const fs = require('fs');

const { Client, Collection, Intents } = require('discord.js');

const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Ready.');
    const guild = client.guilds.cache.get('808847985580048436');
	client.user.setPresence({
		status: 'dnd',
		activity: {
			name: `${guild.memberCount} members in the Dark Assassins Discord`,
			type: 'WATCHING'
		}
	});
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand())
        return;
    
    const { commandName } = interaction;

    const command = client.commands.get(interaction.commandName);

    if (!command)
        return;
    
    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply({ content: 'An error occured while executing this command. Check logs.', ephemeral: true });
    }
});

client.login(token);
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', client => {
    client.channels.cache.get('CHANNEL ID').send(`<@&${roleId}> Yooo it's RealBe time !!!`);
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);

// Logout
process.exit(0)

import { Client, Events, GatewayIntentBits } from 'discord.js';
import { getRealBe } from "./schedule-pop.js";
import config from './config.json' with { type: 'json' };

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

function sendRealBeNotification(){
    client.channels.cache.get(config.channelId).send(`<@&${config.roleId}> Yooo it's RealBe time !!!`);
};

client.login(config.token);

getRealBe();

export { sendRealBeNotification }

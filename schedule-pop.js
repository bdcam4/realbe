import { getRandomTime } from './random-time.js';
import config from './config.json' with { type: 'json' };
import schedule from 'node-schedule';
import { sendRealBeNotification } from './discord-bot.js';

function getRealBe(){
    const generate_daily_pop = schedule.scheduleJob( { hour: config.schedulerTime }, function(){
        let POP_TIME = getRandomTime(config.popTime.min, config.popTime.max);
        const current_pop = schedule.scheduleJob(POP_TIME, function(){
            sendRealBeNotification();
            current_pop.cancel()
        })
    })
};
    
export { getRealBe }

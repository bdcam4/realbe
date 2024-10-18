import { getRandomTime } from './random-time.js';
import config from './config.json' with { type: 'json' };
import schedule from 'node-schedule';
import { sendRealBeNotification } from './discord-bot.js';

function getRealBe(){
    const generate_daily_pop = schedule.scheduleJob( { hour: config.schedulerTime }, function(){
        let RANDOM_TIME = getRandomTime(config.popTime.min, config.popTime.max);        
        let POP_TIME = new Date();
        POP_TIME.setHours(RANDOM_TIME.hour);
        POP_TIME.setMinutes(RANDOM_TIME.minute);
        POP_TIME.setSeconds(RANDOM_TIME.second);
        console.log(`RealBe scheduled for ${POP_TIME.toString()}`);

        const current_pop = schedule.scheduleJob(POP_TIME, function(){
            sendRealBeNotification()
        })
    })
};
    
export { getRealBe }

import { getRandomTime } from './random-time.js';
import config from './config.json' with { type: 'json' };
import schedule from 'node-schedule';
import { sendRealBeNotification } from './discord-bot.js';

// Generate today's pop at 3am daily 
function getRealBe(){
    const generate_daily_pop = schedule.scheduleJob( { hour: config.schedulerTime }, function(){
        let POP_TIME = getRandomTime(config.popTime.min, config.popTime.max);
        console.log("Generating today's RealBe pop time!");
        console.log(POP_TIME);
        const current_pop = schedule.scheduleJob(POP_TIME, function(){
            console.log("Yooo it's time for RealBe !!!");
            sendRealBeNotification();
            current_pop.cancel()
        })
    })
};
    
export { getRealBe }

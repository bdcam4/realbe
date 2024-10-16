import { getRandomTime } from './random-time.js';
const schedule = require('node-schedule');
const { popTime } = require('./config.json');

// generate today's pop at 3am daily 
const daily_generate_pop = schedule.scheduleJob( { hour: 3 }, function(){
    if (!current_pop) { 
        current_pop = schedule.scheduleJob( getRandomTime(popTime.min,popTime.max), function(){
            console.log("Yooo it's time for RealBe !!!")
        });
    };
    current_pop.reschedule( getRandomTime(popTime.min,popTime.max) )
});

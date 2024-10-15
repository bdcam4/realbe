import { getRandomTime } from './random-time.js';
// import { someDiscordFunction } from './discord-action.js'
const schedule = require('node-schedule');

// generate pop time between 6am - 9pm
let POP_TIME = getRandomTime(6,21);

// schedule the pop
const job = schedule.scheduleJob(POP_TIME, function(){
    console.log("Yooo it's RealBe time !!");

    // someDiscordFunction

    schedule.gracefulShutdown()
});


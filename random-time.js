function getRandomNumber(min, max){
    return Math.random() * (max - min) + min
};

function getRandomTime(min, max){
    min = min*3600;
    max = max*3600;

    let random_number = getRandomNumber(min, max);
    let hours = Math.floor(random_number/3600);
    let minutes = Math.floor(random_number/60%60);
    let seconds = Math.floor(random_number%60);

    return {hours, minutes, seconds}
};

export { getRandomTime }

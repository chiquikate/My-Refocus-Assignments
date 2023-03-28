function toHours (seconds){
    var hours = Math.floor(seconds / 3600);
    var remainder = seconds % 3600;
    return {hour: hours, remainder: remainder};
}

function toMinutes (seconds){
    var minutes = Math.floor(seconds / 60);
    var remainder = seconds % 60;
    return {minutes: minutes, remainder: remainder};
}

function humanDuration (duration){
    var hoursObject = toHours(duration);
    var minutesObject = toMinutes(hoursObject.remainder);
    var seconds = minutesObject.remainder;
    console.log(`The formatted duration of ${duration} seconds is ${hoursObject.hour} ${hoursObject.hour > 1? "Hours": "Hour"}, ${minutesObject.minutes} ${minutesObject.minutes > 1? "Minutes": "Minutes"} and ${seconds} ${seconds > 1? "Seconds": "Second"}.`);
}

humanDuration(4800);
humanDuration(5212);
humanDuration(300);
 
function getSecondsToday(){
    let date = new Date()
    let dateTimezone = new Intl.DateTimeFormat("en-IR", {timeStyle: 'long' }).format(date);
    let timeSpilited = dateTimezone.split(" ")[0].split(":");
    let secondsToday = Number(timeSpilited[0])*3600 + Number(timeSpilited[1])*60 + Number(timeSpilited[2])
    return secondsToday;
}

console.log(getSecondsToday());
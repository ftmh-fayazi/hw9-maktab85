function formatDate(date){
    let currentDate = new Date();
    let diff = (currentDate - date)/1000;

    if(diff < 1){
        return "right now"
    }

    else if(diff > 1 && diff < 60){
        return `${diff} sec ago`
    }

    else if(diff > 60 && diff < 3600){
        return `${diff/60} min ago`
    }

    else{
        let result = [date.getDate(), date.getMonth()+1, date.getFullYear()].join(".")+" "+[date.getHours(),
             date.getMinutes(),
              date.getSeconds()].join(":");
        return result
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "right now"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec ago"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min ago"
// yesterday's date like 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
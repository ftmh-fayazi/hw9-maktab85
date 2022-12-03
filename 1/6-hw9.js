let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];

function getAverageAge(...array){
    let numbers = array[0].map(item => item.age);
    let sum = numbers.reduce((sum, current) => sum + current, 0);
    return sum / numbers.length
}

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
console.log(getAverageAge(arr));

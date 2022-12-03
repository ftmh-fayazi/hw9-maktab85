function filterRange(arr , num1 , num2) {
    return arr.filter((item) => item >= num1 && item <= num2)
    
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)

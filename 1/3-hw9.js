let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(arr, 1, 4);//removed the numbers except from 1 to 4
console.log(arr);//[3,1]
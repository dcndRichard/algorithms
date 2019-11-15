/* 1. */
function countGreaterThanY(arr, y) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count = count + 1;
        }
    }
    console.log(count)
}
var nums = [82, 24, 6, 71, 8, 95, 32, 55, 7, 122];
countGreaterThanY(nums, 11);



/* 2. */
function printMaxMinAvg(arr) {
    let i = 0, max = arr[i], min = arr[i], avg, sum = arr[i];
    while (i < arr.length) {
        max = (arr[i] > max) ? arr[i] : max;
        min = (arr[i] < min) ? arr[i] : min;
        sum = sum + arr[i];
        i++;
    }
    avg = sum / arr.length;
    console.log('max: ' + max, 'min: ' + min, 'average: ' + avg);
}
printMaxMinAvg([70, 71, 89, 99, 49]);



/* 3 */
function replaceNeg(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push('Dojo');
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let dojoArr = replaceNeg([1, 2, -3, -5, 5]);
console.log(dojoArr);



/* 4 */
function removeArrElements(arr, start, end) {
    let n = start, range = [];
    while(n <= end){
        range.push(start);
        n ++;
    }
    arr.splice(start,range.length);
    return arr;
}
console.log(removeArrElements([20, 30, 40, 50, 60, 70], 2, 4));
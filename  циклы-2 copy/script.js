
//  цикл с помошью while
// let n = 0;
// while (n < 100) {
//     n++;
//     console.log(n)
// }
let result = '';
function setNumber(num) {
    while (num < 300) {

        result = result + num++;
    }
    return result;
}
setNumber(340);

// let result = '';
// function setCount(num) {
//     for (let i = 1; i <= num; i++) {
//         result = result + i + ' ';
//     }
//     return result;
// }
// console.log(setCount(400));

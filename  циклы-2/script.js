
// функция перебора числа с возможностью задавать конечное значение
let result = '';
function setCount(num) {
    for (let i = 1; i <= num; i++) {
        result = result + i + ' ';
    }
    return result;
}
console.log(setCount(400));
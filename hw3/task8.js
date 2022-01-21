/*Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный 

массив в качестве параметров, а затем последовательно выводит на экран 
его элементы.Обязательно нужно использовать рекурсию.Использовать 
цикл запрещено.Данная функция должна обязательно содержать проверку 
входного параметра, потому что принимать она может только не пустой массив.

*Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*
*/

var f = function () { 
    if ((arguments.length > 1) || (!Array.isArray(arguments[0]))) {
        return "Error: parameter type should be an array"; 
    }   
    else if ((Array.isArray(arguments[0])) && (arguments[0].length > 0)) {
        var arr = arguments[0];
        var num = arr[0];
        arr.splice(0, 1);
        console.log(num);
        return f(arr); 
    } else { return "Error: parameter can't be an empty";}
}

console.log(f([1, 2, 3]));
// 1
// 2
// 3
console.log(f(1, 2, 3)); // Error: parameter type should be an array
console.log(f('Content')); // Error: parameter type should be an array
console.log(f([])); // Error: parameter can't be an empty

var f = function (num1, num2, num3) {
    if ((typeof num1 == 'number')&&(typeof num2 == 'number')&&(typeof num3 == 'number')) {
        return (num1 - num2)/num3;
    } else { return 'Error: parameter type is not a Number'; }
};

console.log(f(9, 3, 2)); // 3
console.log(f('s', 9, 3)); // Error: all parameters type should be a Number
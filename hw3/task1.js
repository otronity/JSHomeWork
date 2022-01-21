var f = function (num) {
    if (!isNaN(num)) {
        return num * num * num;
    } else { return 'Error: parameter type is not a Number'; }
};

console.log(f('2'));
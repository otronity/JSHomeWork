var f = function () { 
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) { 
        if (typeof arguments[i] == 'number') {
            sum = sum + arguments[i];
        } else { return 'Error: parameter type is not a Number'; }
    }
    return sum;
}

console.log(f(1,2,3)); // 6
console.log(f(1,1,1,1,1,1,1,1)); // 8
console.log(f(1,2,'s',4));

var getDivisors = function (num) {
    var arr = [];
    if (typeof num == 'number') {
        if (num != 0) { 
            for (var i = 1; i <= num; i++){
                if (num % i == 0) { arr.push(i); }
            }
            return arr;
        } else {
            return "Error: parameter can't be a 0"; }        
    } else { return 'Error: parameter type is not a Number'; }
}


console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors('Content')); // Error: parameter type is not a Number
console.log(getDivisors(0)); // Error: parameter can't be a 0
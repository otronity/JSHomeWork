var arr = [1, 2, -4, 3, -9, -1, 7, 'S', 5];
var arrpos = [];

var isPositive = function (num) {
    if (typeof num == 'number'){
        if (num >= 0) { return true; } else { return false; }
    } else {  console.log('Error: parameter type is not a Number'); return false;  }
}

for (var i = 0; i < arr.length; i++) { 
    if (isPositive(arr[i])) { arrpos.push(arr[i]); }
}

console.log(arrpos);
console.log(isPositive('S'));

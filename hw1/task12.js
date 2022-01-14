
var arr = [1, 2, 3, -5, -2, 1, -4];
var sum = 0;
for (var i = 0; i < 6; i++) { 
    if (arr[i] > 0) { sum = sum + arr[i];}
}

console.log(sum);
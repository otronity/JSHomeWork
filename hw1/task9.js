var arr = [1, 2, 3, 4, 5, 6];
var num;
for (var i = 0; i < 6; i++) { 
    for (var j = 0; j < 6; j++) { 
        num = arr[j];
        if (num < arr[j + 1]) { arr[j] = arr[j + 1]; arr[j + 1] = num;}
    }
}

for (var i = 0; i < 6; i++) { console.log(arr[i]);}
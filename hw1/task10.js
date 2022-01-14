var arr = [6, 5, 4, 3, 2, 1];

var num;
for (var i = 0; i < 6; i++) { 
    for (var j = 0; j < 6; j++) { 
        num = arr[j];
        if (num > arr[j + 1]) { arr[j] = arr[j + 1]; arr[j + 1] = num;}
    }
}

for (var i = 0; i < 6; i++) { console.log(arr[i]);}
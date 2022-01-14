var n = 1000;
var num = 0;
while (n > 50) { 
    n = n / 2;
    num++;
}

console.log('Количество итераций ' + num);
console.log('Число после деления ' + n);

var f = function (num) {
    if (typeof num != 'number') { return 'Error: parameter type is not a Number'; }
    else {
        switch (num) {
            case 1: return 'Воскресенье'; break;
            case 2: return 'Понедельник'; break;
            case 3: return 'Вторник'; break;
            case 4: return 'Среда'; break;
            case 5: return 'Четверг'; break;
            case 6: return 'Пятница'; break;
            case 7: return 'Суббота'; break;    
            default: return 'Error: parameter should be in the range of 1 to 7'; break;
        }
    } 
};

console.log(f(1)); // Воскресенье
console.log(f(2)); // Понедельник
console.log(f(8)); // Error: parameter should be in the range of 1 to 7
console.log(f('1')); // Error: parameter type is not a Number
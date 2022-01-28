var arrayFill = function (str, num) {
    try {
        if (Array.isArray(str) || typeof str == 'object' || typeof str == 'string' || typeof str == 'number') {
            if (typeof num == 'number') {
                var arr = [];
                for (i = 0; i < num; i++) {
                    arr.push(str);
                }
                return arr;
            } else { throw "Второй аргумент не функция"; return false; }
        } else { throw "Первый аргумент имеет некорректный тип данных"; return false; }
    } catch (e) { console.error(e); }
}

var arr = arrayFill('x', 5);
console.log(arr);
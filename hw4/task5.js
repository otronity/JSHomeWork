
var reduce = function (arr, callback, startValue) {
    try {
        if (Array.isArray(arr)) {
            if (typeof callback == 'function') {
                if (typeof startValue == 'number' || typeof startValue == 'string') {
                    var i, length = arr.length, result = startValue;
                    for (i = 0; i < length; i = i + 1) {
                        result = callback.call(null, result, arr[i], i, arr);
                    }
                    return result;
                } else { throw "Третий аргумент не число/строка"; return false; }
            } else { throw "Второй аргумент не функция"; return false; }
        } else { throw "Первый аргумент не массив"; return false; }
    } catch (e) { console.error(e); }
};

const arr = [1,2,3,2];
const acc = 0;
console.log(
    reduce(arr, function (result, current) {
        return result + current;
    }, acc));

var reduceRight = function (arr, callback, startValue) {
    try {
        if (Array.isArray(arr)) {
            if (typeof callback == 'function') {
                if (typeof startValue == 'number' || typeof startValue == 'string') {
                    var i, length = arr.length, result = startValue;
                    for (i = length - 1; i >= 0; i = i - 1) {
                        result = callback.call(null, result, arr[i], i, arr);
                    }
                    return result;
                } else { throw "Третий аргумент не число/строка"; return false; }
            } else { throw "Второй аргумент не функция"; return false; }
        } else { throw "Первый аргумент не массив"; return false; }
    } catch (e) { console.error(e); }
};

const arr = ['k','o','o','l'];
const acc = '';
console.log(
    reduceRight(arr, function (result, current) {
        return result + current;
    }, acc));

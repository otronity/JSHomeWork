var every = function (arr, callback, thisArg) {
    try {
        if (Array.isArray(arr)) {
            if (typeof callback == 'function') {
                var i, length = arr.length;
                for (i = 0; i < length; i = i + 1) {
                    if (!callback.call(thisArg, arr[i], i, arr)) {
                        return false;
                    }
                }
                return true;
            } else { throw "Второй аргумент не функция"; return false; }
        } else { throw "Первый аргумент не массив"; return false; }
    } catch (e) { console.error(e); }
};

const arr = [1, 2, 3];
console.log(every(arr, function (item, i, arr) {
    return arr[i] < 5;
}));
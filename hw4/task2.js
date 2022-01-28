var filter = function (arr, callback, thisArg) {
    try {
        if (Array.isArray(arr)) {
            if (typeof callback == 'function') {        
                var i, length = arr.length, results = [];
                for (i = 0; i < length; i = i + 1) {
                    if (callback.call(thisArg, arr[i], i, arr)) {
                        results.push(arr[i]);
                    }
                }
                return results;
            } else { throw "Второй аргумент не функция"; }
        } else { throw "Первый аргумент не массив"; }
    } catch (e) { console.error(e); }
};


const arr = [1, 2, 3];
console.log(filter(arr, function (item, i, arr) {
    return arr[i] < 3;
}));
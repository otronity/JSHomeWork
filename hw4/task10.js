var reverse = function (arr, num) {
    try {
        if (Array.isArray(arr)) {
            if (arr.length > 0) {
                var curr;
                var arr1 = [];
                for (i = arr.length - 1; i >= 0; i--) {
                    arr1.push(arr[i]);
                }
                arr = arr1;
            } else { throw "Переданный массив пуст"; }
        } else { throw "Первый аргумент не массив"; }
        return arr;
    } catch (e) { console.error(e); }
}

const arr = [3, 2, 1, 5];
console.log(reverse(arr));
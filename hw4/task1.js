var forEach = function (arr, callback, thisArg) {
  try {
    if (Array.isArray(arr)) {
      if (typeof callback == 'function') {
        var i, length = arr.length;
        for (i = 0; i < length; i = i + 1) {
          callback(arr[i], i, arr);
        }
      } else { throw "Второй аргумент не функция"; }
    } else { throw "Первый аргумент не массив"; }
  } catch (e) { console.error(e); }
};

const arr = [1, 2, 3];
forEach(arr, function (item, i, arr) {
  console.log(i + " : " + arr[i] + " (array: " + arr + ")");
});
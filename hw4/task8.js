var f = function (arr) { 
    try {
        if (Array.isArray(arr)) {
            if (arr.length > 0) {
                var flatarr = [];
                (function flat(arr) {
                    arr.forEach(function (el) {
                        if (Array.isArray(el)) flat(el);
                        else if (typeof el == 'number') { flatarr.push(el); }
                        else { throw "Элемент " + el + " не число или не массив"; }
                    });
                })(arr);
                var sum = 0;
                for (i = 0; i < flatarr.length; i++) {
                    sum = sum + flatarr[i];
                }
                return sum;
            } else return 0;
        } else { throw "Первый аргумент не массив"; }
    } catch (e) { console.error(e); }
}


const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3

const arr6 = [[[[[],'s']]]];
console.log(f(arr6)); // error
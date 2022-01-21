var f = function () {
    if (Array.isArray(arguments[0])) { return true; } else { return false;}
}

console.log(f([1], 2, 3));

exports.min = function min (array) {
    if(!array || array.length === 0) return 0
    return array.reduce((acc,item) => {
        return Math.min(acc, item);
    }, 0)
}

exports.max = function max (array) {
    if(!array || array.length === 0) return 0
  return array.reduce((acc,item) => {
        return Math.max(acc, item);
    }, 0)
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) return 0
    return  array.reduce((acc,item) => {
        return acc + item;
    }, 0) / array.length
}

function arrayMap(arr, fn) {
  return arr.reduce(function(acc, el, i, arr) {
    return acc.concat(fn(el, i, arr));
  }, []);
}

module.exports = arrayMap;

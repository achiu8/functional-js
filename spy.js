function Spy(target, method) {
  var result = { count: 0 };
  var orig = target[method];
  target[method] = function() {
    result.count++;
    return orig.apply(target, arguments);
  };
  return result;
}

module.exports = Spy;

function repeat(operation, num) {
  if (num <= 0) return;
  return function() {
    operation();
    return repeat(operation, --num);
  }
}

function trampoline(fn) {
  while (fn && typeof fn === 'function') {
    fn = fn();
  }
}

function myFunc(operation, num) {
  trampoline(function() {
    return repeat(operation, num);
  });
}

module.exports = myFunc;

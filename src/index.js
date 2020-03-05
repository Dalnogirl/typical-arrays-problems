
exports.min = function min(array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0 | !Array.isArray(array)) {
    return 0;
  } else {
    return array.sort((a, b) => a - b)[0];
  }
}

exports.max = function max(array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0 | !Array.isArray(array)) {
    return 0;
  } else {
    return array.sort((a, b) => b - a)[0];
  }
}

exports.avg = function avg(array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0 | !Array.isArray(array)) {
    return 0;
  } else {
    return array.reduce((acc, i) => acc += i) / array.length;
  }
}

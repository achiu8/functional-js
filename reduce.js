function countWords(inputWords) {
  return inputWords.reduce(function(count, word) {
    count[word] = ++count[word] || 1;
    return count;
  }, {});
}

module.exports = countWords;

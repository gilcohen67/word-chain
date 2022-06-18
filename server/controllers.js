const randomWords = require('random-words');

exports.randomWords = (req, res) => {
  const words = randomWords({ exactly: 2 });
  res.send(words);
}
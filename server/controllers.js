const randomWords = require('random-words');
const axios = require('axios');
require('dotenv').config();

/**
 * Winnable Games:
 * Listen => Said
 *
 */

exports.getDailyWords = (req, res) => {
  const words = randomWords({ exactly: 2 });
  Promise.all([
    axios.get(`${process.env.THES_API_URL}${words[0]}?key=${process.env.THES_API_KEY}`),
    axios.get(`${process.env.THES_API_URL}${words[1]}?key=${process.env.THES_API_KEY}`)
  ])
    .then(([word1, word2]) => {
      res.status(200).send({
        start: { word: words[0], thes: word1.data[0] },
        goal: { word: words[1], thes: word2.data[1] },
      });
    })
    .catch((err) => {
      res.send(400);
    });
}

exports.getThesByWord = (req, res) => {
  axios.get(`${process.env.THES_API_URL}${req.params.word}?key=${process.env.THES_API_KEY}`)
    .then(({ data }) => {
      if (typeof data[0] === 'string' || data[0] === undefined) {
        console.log(data[0]);
        res.sendStatus(404);
        return;
      }
      res.send({ word: req.params.word, thes: data[0] });
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400);
    })
}
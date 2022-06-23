const randomWords = require('random-words');
const axios = require('axios');
const { getWordsByDate, insertDailyWords } = require('../db/index');
const { unmarshall } = require('@aws-sdk/util-dynamodb');
require('dotenv').config();

function hashCode(string) {
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function getDate() {
  let today = '';
  const date = new Date();
  today += date.getUTCMonth();
  today += date.getUTCDate();
  today += date.getUTCFullYear();
  return today;
}

function hashDate() {
  return hashCode(getDate()).toString();
}

exports.getDailyWords = (req, res) => {
  getWordsByDate(hashDate())
    .then(({ Item }) => {
      if (Item) {
        Item = unmarshall(Item);
      }
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
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
}

exports.getThesByWord = (req, res) => {
  axios.get(`${process.env.THES_API_URL}${req.params.word}?key=${process.env.THES_API_KEY}`)
    .then(({ data }) => {
      if (typeof data[0] === 'string' || data[0] === undefined) {
        res.sendStatus(404);
        return;
      }
      res.send({ word: req.params.word, thes: data[0] });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
}

exports.saveDailyWords = (req, res) => {
  insertDailyWords(hashDate(), req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(401);
    });
}
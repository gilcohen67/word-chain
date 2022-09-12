const axios = require('axios');
const { unmarshall } = require('@aws-sdk/util-dynamodb');
const randomWords = require('random-words');
const db = require('../../../db');
const { hashDate } = require('../../../helpers');

export default function handler(req, res) {
  if (req.method === 'GET') {
    db.getWordsByDate(hashDate())
      .then(({ Item }) => {
        if (Item) {
          Item = unmarshall(Item);
          res.status(200).send(Item.daily_words);
          return;
        } else {
          throw (new Error('item not found in DB'));
        }
      })
      .catch(err => {
        const words = randomWords({ exactly: 2 });
        Promise.all([
          axios.get(`${process.env.THES_API_URL}${words[0]}?key=${process.env.THES_API_KEY}`),
          axios.get(`${process.env.THES_API_URL}${words[1]}?key=${process.env.THES_API_KEY}`)
        ])
          .then(([word1, word2]) => {
            res.status(200).send([
              { word: words[0], thes: word1.data[0] },
              { word: words[1], thes: word2.data[1] }
            ]);
          })
          .catch((err) => {
            res.status(400);
          });
      });
  } else if (req.method === 'POST') {
    db.insertDailyWords(hashDate(), req.body)
      .then(() => {
        res.status(201);
      })
      .catch(err => {
        if (err.__type === 'com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException') {
          res.status(200);
          return;
        }
        res.status(401);
      });
  }
}

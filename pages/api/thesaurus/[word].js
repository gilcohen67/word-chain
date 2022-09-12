const axios = require('axios');

export default function handler(req, res) {
  axios.get(`${process.env.THES_API_URL}${req.query.word}?key=${process.env.THES_API_KEY}`)
    .then(({ data }) => {
      if (typeof data[0] === 'string' || data[0] === undefined) {
        res.status(404);
        return;
      }
      res.status(200).send({ word: req.query.word, thes: data[0] });
    })
    .catch(err => {
      console.log(err);
      res.status(400);
    });
}

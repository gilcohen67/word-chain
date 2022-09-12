const { hashDate, createRandomId } = require('../../../helpers');
const db = require('../../../db');

export default function handler(req, res) {
  if (req.method === 'GET') {
    db.getLeaderboardByDate(hashDate())
      .then(({ Items }) => {
        res.send(Items);
      })
      .catch(err => {
        console.log(err);
        res.status(400);
      })
  } else if (req.method === 'POST') {
    const data = {
      date_hash: hashDate(),
      random_id: createRandomId(),
      moves: req.body.moves,
      username: req.body.username
    };
    db.insertToLeaderboards(data)
      .then(() => {
        res.status(201);
      })
      .catch(err => {
        console.log(err);
        res.status(401);
      });
  }
}

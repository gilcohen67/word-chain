const express = require('express');
const ctrl = require('./controllers');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));


app.get('/', (req, res) => {
  res.sendStatus(304);
});

// routes
app.get('/words/daily', ctrl.getDailyWords);
app.get('/thesaurus/:word', ctrl.getThesByWord);
app.get('/leaderboards', ctrl.getLeaderboards);
app.post('/leaderboards', ctrl.submitToLeaderboards);
app.post('/words/daily', ctrl.saveDailyWords);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
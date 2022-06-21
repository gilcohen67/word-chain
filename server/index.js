const express = require('express');
const ctrl = require('./controllers');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));


app.get('/', (req, res) => {
  res.send('hello world!');
});

// routes
app.get('/words/daily', ctrl.getDailyWords);
app.get('/thesaurus/:word', ctrl.getThesByWord);
app.get('/words/history'); // maybe serch history by word as well
app.post('/words/history'); // parent and child words

app.listen(8080, () => {
  console.log('listening on port 8080');
});
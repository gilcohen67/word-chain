const express = require('express');
const ctrl = require('./controllers');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('hello world!');
});

// routes
app.get('/words/random', ctrl.randomWords);

app.listen(8080, () => {
  console.log('listening on port 8080');
});